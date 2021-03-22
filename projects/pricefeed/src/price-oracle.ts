import {
  cosmosclient, rest, cosmos, google
} from "cosmos-client";
import { rest as botanyrest, botany } from 'botany-client';
import * as utils from "./utils";
import Long from 'long'
import { IFxClient } from "./clients/fx/interface";
import { OraclePrice } from "./domain/oracle-price";
import CcxtClient from "./clients/ccxt";
import { FIAT_CURRENCIES } from "./constants/currency";
import { Ticker } from "./domain/market-price";

require("dotenv").config();
require("log-timestamp");

/**
 * Price oracle class for posting prices to Kava.
 */
export class PriceOracle {
  private sdk: cosmosclient.CosmosSDK;
  private privKey: Promise<cosmosclient.secp256k1.PrivKey>;
  private ccxt: CcxtClient;

  constructor(
    private marketIDs: string[],
    private expiry: string,
    private expiryThreshold: string,
    private deviation: string,
    url: string,
    chainID: string,
    mnemonic: string,
    bech32Prefix: string,
    private fxClients: IFxClient[],
  ) {
    if (!marketIDs) {
      throw new Error("must specify at least one market ID");
    }
    if (!expiry) {
      throw new Error("must specify an expiration time");
    }
    if (!expiryThreshold) {
      throw new Error("must specify an expiration time threshold");
    }
    if (!deviation) {
      throw new Error("must specify percentage deviation");
    }

    this.sdk = new cosmosclient.CosmosSDK(url, chainID);
    this.privKey = cosmosclient
      .generatePrivKeyFromMnemonic(mnemonic)
      .then((buffer) => new cosmosclient.secp256k1.PrivKey({ key: buffer }));
    if (bech32Prefix) {
      cosmosclient.config.bech32Prefix = {
        accAddr: bech32Prefix,
        accPub: bech32Prefix + cosmosclient.AddressPrefix.Public,
        valAddr: bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Operator,
        valPub: bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Operator + cosmosclient.AddressPrefix.Public,
        consAddr: bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Consensus,
        consPub: bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Consensus + cosmosclient.AddressPrefix.Public,
      };
    }
    this.ccxt = new CcxtClient();
  }

  /**
   * Post prices for each market
   */
  async postPrices() {
    const privKey = await this.privKey;
    const address = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());
    const account = await rest.cosmos.auth.account(this.sdk, address)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account));

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('not a BaseAccount')
    }

    await this.getLatestFiatCurrencyPrices();

    for (let i = 0; i < this.marketIDs.length; ++i) {
      const marketID = this.marketIDs[i];
      const result = await this.fetchPrice(marketID);

      if (!this.checkPriceIsValid(result)) {
        return;
      }

      const shouldPost = await this.validatePricePosting(
        address,
        marketID,
        result.price,
      );
      if (!shouldPost) {
        return;
      }

      try {
        const res: any = await this.postNewPrice(
          result.price,
          marketID,
          account,
          i,
        );
        //console.log("res", res);
        // if (res.data.code !== undefined) {
        //   throw new Error(res.data.raw_log);
        // }
      } catch (e) {
        console.log(`could not post ${marketID} price`);
        console.log(e);
        return;
      }
    }
  }

  async getLatestFiatCurrencyPrices() {
    return await Promise.race(
      this.fxClients.map((client) => client.getLatestRates()),
    );
  }

  /**
   * Fetches price for a market ID
   * @param {String} marketID the market's ID
   */
  async fetchPrice(
    marketID: string,
  ): Promise<{ price: number | null; success: boolean }> {
    try {
      const tickers = await this.fetchTickers(marketID);
      const usdTickers = await this.convertToUsdTickers(tickers);
      const aggravatedAverageUsdPrice = utils.calculateAggravatedAverageFromTickers(
        usdTickers,
      );
      const convertedPrice = await this.convertUsdPrice(
        marketID,
        aggravatedAverageUsdPrice,
      );
      return { price: convertedPrice, success: true };
    } catch (e) {
      console.log(`could not get ${marketID} price from Binance`);
      return { price: null, success: false };
    }
  }

  async fetchTickers(marketID: string) {
    switch (marketID) {
      case "btc:jpy":
      case "btc:eur":
        return this.ccxt.fetchTickers(FIAT_CURRENCIES, "BTC");
      case "btc:jpy:30":
      case "btc:eur:30": {
        const candleSticls = await this.ccxt.fetchCandleSticks(
          FIAT_CURRENCIES,
          "BTC",
          "1m",
          30,
        );
        return candleSticls.map((cs) =>
          utils.calculateAverageFromCandleSticks(cs),
        );
      }
      default:
        throw new Error(`Invalid market id: ${marketID}`);
    }
  }

  async convertToUsdTickers(tickers: Ticker[]) {
    const priceRate = await this.getLatestFiatCurrencyPrices();

    const convertedTickers: Ticker[] = [];
    tickers.forEach((ticker) => {
      if (ticker.market.quote === "USD") {
        convertedTickers.push(ticker);
        return;
      }
      if (ticker.market.quote in priceRate.rates) {
        const usdPrice =
          ticker.data.lastPrice / priceRate.rates[ticker.market.quote];

        convertedTickers.push({
          market: ticker.market,
          data: {
            ...ticker.data,
            lastPrice: usdPrice,
          },
        });
      }
    });
    return convertedTickers;
  }

  getBaseCurrency(marketID: string) {
    switch (marketID) {
      case "bnb:jpy":
      case "bnb:jpy:30":
        return "JPY";
      case "bnb:eur":
      case "bnb:eur:30": {
        return "EUR";
      }
    }
    return null;
  }

  async convertUsdPrice(marketID: string, price: number) {
    const priceRate = await this.getLatestFiatCurrencyPrices();
    const currency = this.getBaseCurrency(marketID);
    if (currency && currency in priceRate.rates) {
      const currencyPrice = priceRate.rates[currency] * price;
      return currencyPrice;
    }
    return null;
  }

  /**
   * Validates price post against expiration time and derivation threshold
   * @param {String} marketID the market's ID
   * @param {String} fetchedPrice the fetched price
   */
  async validatePricePosting(
    address: cosmosclient.AccAddress,
    marketID: string,
    fetchedPrice: number,
  ) {
    // Fetch the previous prices of all markets
    let previousPrices;
    try {
      const response = await botanyrest.botany.pricefeed.allRawPrices(this.sdk, marketID)
      if (response.status === 200) {
        previousPrices = response.data.prices || [];
      } else {
        throw response.statusText;
      }
    } catch (e) {
      console.log(`couldn't get previous prices for ${marketID}, skipping...`);
      return true;
    }
    // Get this oracle's previously posted price for this market
    const previousPrice = utils.getPreviousPrice(
      previousPrices.map(price => ({
        market_id: price.market_id || '',
        oracle_address: price.oracle_address || '',
        price: price.price || '',
        expiry: price.expiry || ''
      })),
      marketID,
      address.toString(),
    );

    if (
      previousPrice !== undefined &&
      !this.checkPriceExpiring(previousPrice)
    ) {
      const percentChange = utils.getPercentChange(
        Number.parseFloat(previousPrice.price),
        fetchedPrice,
      );
      console.log("percentChange", percentChange);
      if (percentChange < Number.parseFloat(this.deviation)) {
        console.log(
          `previous price of ${previousPrice.price} and current price of ${fetchedPrice} for ${marketID} below threshold for posting`,
        );
        return false;
      }
    }
    return true;
  }

  /**
   * Posts a new price for a market ID
   * @param {String} fetchedPrice the fetched price
   * @param {String} marketID the market's ID
   * @param {String} account the oracle's account information
   * @param {Number} index the iteration count of the market IDs
   */
  async postNewPrice(
    fetchedPrice: number,
    marketID: string,
    account: cosmos.auth.v1beta1.BaseAccount,
    index: number,
  ) {
    if (!fetchedPrice) {
      throw new Error(
        "a retreived price is required in order to post a new price",
      );
    }

    // Set up post price transaction parameters
    const newPrice = fetchedPrice.toFixed(18).toString();
    let expiryDate = new Date();
    expiryDate = new Date(
      expiryDate.getTime() + Number.parseInt(this.expiry) * 1000,
    );
    const sequence = String(Number(account.sequence ?? 0) + index);

    console.log(
      `posting price ${newPrice} for ${marketID} with sequence ${sequence}`,
    );

    // const stdTx = new StdTx(
    //   [new MsgPostPrice(account.address!, marketID, newPrice, newExpiry)],
    //   //{ amount: [], gas: "250000" },
    //   {},
    //   null,
    //   "",
    // );
    // const signedStdTx = auth.signStdTx(
    //   this.sdk,
    //   await this.privKey,
    //   stdTx,
    //   account.account_number.toString(),
    //   sequence,
    // );
    // return await auth.txsPost(this.sdk, signedStdTx, "block");

    // return this.client.postPrice(marketID, newPrice, newExpiry, sequence);
    const privKey = await this.privKey;

    // build tx
    const msgPostPrice = new botany.pricefeed.MsgPostPrice({
      from: account.address,
      market_id: marketID,
      price: newPrice,
      expiry: new google.protobuf.Timestamp({
        seconds: Long.fromNumber(expiryDate.getUTCSeconds()),
      })
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgPostPrice)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(privKey.pubKey()),
          mode_info: {
            single: {
              mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        gas_limit: cosmosclient.Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(this.sdk, txBody, authInfo);
    const signDoc = txBuilder.signDoc(account.account_number);
    txBuilder.addSignature(privKey, signDoc);

    // broadcast
    try {
      const res = await rest.cosmos.tx.broadcastTx(this.sdk, {
        tx_bytes: txBuilder.txBytes(),
        mode: rest.cosmos.tx.BroadcastTxMode.Block,
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }

  checkPriceIsValid(data: {
    price: number | null;
    success: boolean;
  }): data is { price: number; success: boolean } {
    return data.success;
  }

  /**
   * Checks if the current oracle price is expiring before the threshold
   * @param {String} price the price to validate
   */
  checkPriceExpiring(price: OraclePrice) {
    let d1 = Math.floor(new Date(price.expiry).getTime() / 1000);
    let d2 = Math.floor(new Date().getTime() / 1000);
    return d1 - d2 < Number.parseInt(this.expiryThreshold);
  }

  marketIdToCcxtSymbol(marketId: string) {
    switch (marketId) {
      case "btc:jpy":
      case "btc:jpy:30":
        return "BTC/JPY";
      case "btc:eur":
      case "btc:eur:30":
        return "BTC/EUR";
      default:
        throw new Error(`Unsupported martketId: ${marketId}`);
    }
  }
}
