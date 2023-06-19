import CcxtClient from './clients/ccxt';
import BandClient from './clients/band';
import { IFxClient } from './clients/fx/interface';
import { DOLLAR, EURO, MARKET_CURRENCY_MAP, YEN } from './constants/currency';
import { OraclePrice } from './domain/oracle-price';
import { DataProviderConf } from './domain/data-provider';
import * as utils from './utils';
import cosmosclient from '@cosmos-client/core';
import Long from 'long';
import ununificlient from 'ununifi-client';
import { AccAddress } from '@cosmos-client/core/cjs/types';
import { convertUnknownAccountToBaseAccount } from './converter';

require('dotenv').config();
require('log-timestamp');
const IS_DEBUG_MODE = process.env.MODE == 'debug';

/**
 * Price oracle class for posting prices to Kava.
 */
export class PriceOracle {
  private sdk: cosmosclient.CosmosSDK;
  private privKey: Promise<cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey>;
  private ccxt: CcxtClient;
  private band: BandClient;

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
    private dataProviderConf: DataProviderConf,
  ) {
    if (!marketIDs) {
      throw new Error('must specify at least one market ID');
    }
    if (!expiry) {
      throw new Error('must specify an expiration time');
    }
    if (!expiryThreshold) {
      throw new Error('must specify an expiration time threshold');
    }
    if (!deviation) {
      throw new Error('must specify percentage deviation');
    }

    this.sdk = new cosmosclient.CosmosSDK(url, chainID);
    this.privKey = cosmosclient
      .generatePrivKeyFromMnemonic(mnemonic)
      .then((buffer) => new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({ key: buffer }));
    if (bech32Prefix) {
      cosmosclient.config.setBech32Prefix({
        accAddr: bech32Prefix,
        accPub: bech32Prefix + cosmosclient.AddressPrefix.Public,
        valAddr:
          bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Operator,
        valPub:
          bech32Prefix +
          cosmosclient.AddressPrefix.Validator +
          cosmosclient.AddressPrefix.Operator +
          cosmosclient.AddressPrefix.Public,
        consAddr:
          bech32Prefix +
          cosmosclient.AddressPrefix.Validator +
          cosmosclient.AddressPrefix.Consensus,
        consPub:
          bech32Prefix +
          cosmosclient.AddressPrefix.Validator +
          cosmosclient.AddressPrefix.Consensus +
          cosmosclient.AddressPrefix.Public,
      });
    }
    this.ccxt = new CcxtClient();
    this.band = new BandClient(
      dataProviderConf.dataProviderUrl,
      dataProviderConf.dataProviderStoreType,
      dataProviderConf.dataProviderStoreLocation,
      dataProviderConf.dataProviderDataRetentionPeriodMin,
    );
  }

  /**
   * Post prices for each market
   */
  async postPrices() {
    const privKey = await this.privKey;
    const address = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    for (let i = 0; i < this.marketIDs.length; ++i) {
      const marketID = this.marketIDs[i];
      const result = await this.fetchPrice(marketID);
      if (IS_DEBUG_MODE) {
        console.log('result', result);
      }

      if (!this.checkPriceIsValid(result)) {
        if (IS_DEBUG_MODE) {
          console.log(`skip posting ${marketID} price`);
        }
        continue;
      }

      try {
        const res: any = await this.postNewPrice(result.price, marketID, address);
        if (IS_DEBUG_MODE) {
          console.log('res', res);
        }
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

  // async getLatestFiatCurrencyPrices() {
  //   return await Promise.race(this.fxClients.map((client) => client.getLatestRates()));
  // }

  /**
   * Fetches price for a market ID
   * @param {String} marketID the market's ID
   */
  async fetchPrice(marketID: string): Promise<{ price: number | null; success: boolean }> {
    try {
      if (this.useBandData(this.dataProviderConf)) {
        console.log('use band protocol');
        return await this.fetchPriceFromBand(marketID);
      } else {
        console.log('use ccxt');
        return await this.fetchPriceFromCCXT(marketID);
      }
    } catch (e) {
      console.error(e);
      console.log(`could not get ${marketID} price from data provider`);
      return { price: null, success: false };
    }
  }

  /**
   * Fetches price for a market ID
   * @param {String} marketID the market's ID
   */
  async fetchPriceFromBand(marketID: string): Promise<{ price: number | null; success: boolean }> {
    const currency = MARKET_CURRENCY_MAP[marketID];
    if (!currency) {
      throw new Error(`not supported marketID:${marketID}`);
    }
    const currencyUbtc = await this.band.getPrice(currency);
    return {
      price: currencyUbtc,
      success: true,
    };
  }

  /**
   * Fetches price for a market ID
   * @param {String} marketID the market's ID
   */
  async fetchPriceFromCCXT(marketID: string): Promise<{ price: number | null; success: boolean }> {
    const tickers = await this.fetchTickers(marketID);
    // console.log('tickers', tickers);
    // const usdTickers = await this.convertToUsdTickers(tickers);
    const aggravatedAverageUsdPrice = utils.calculateAggravatedAverageFromTickers(tickers);
    // console.log('aggravatedAverageUsdPrice', aggravatedAverageUsdPrice);
    // console.log('convertedPrice', convertedPrice);
    const denominatedPrice = (() => {
      if (aggravatedAverageUsdPrice === null) {
        return null;
      }
      switch (marketID) {
        case 'ubtc:jpy':
        case 'ubtc:jpy:30':
        case 'ubtc:eur':
        case 'ubtc:eur:30':
        case 'ubtc:usd':
        case 'ubtc:usd:30':
        case 'uusdc:usd':
        case 'uusdc:usd:30':
          return aggravatedAverageUsdPrice / 1000000;
        default:
          return aggravatedAverageUsdPrice;
      }
    })();
    console.log('denominatedPrice', denominatedPrice);
    return { price: denominatedPrice, success: true };
  }

  async fetchTickers(marketID: string) {
    switch (marketID) {
      case 'ubtc:jpy':
        return this.ccxt.fetchTickers(YEN, 'BTC');
      case 'ubtc:usd':
        return this.ccxt.fetchTickers(DOLLAR, 'BTC');
      case 'ubtc:eur':
        return this.ccxt.fetchTickers(EURO, 'BTC');
      case 'ubtc:jpy:30': {
        const candleSticls = await this.ccxt.fetchCandleSticks(YEN, 'BTC', '1m', 30);
        return candleSticls.map((cs) => utils.calculateAverageFromCandleSticks(cs));
      }
      case 'ubtc:eur:30': {
        const candleSticls = await this.ccxt.fetchCandleSticks(EURO, 'BTC', '1m', 30);
        return candleSticls.map((cs) => utils.calculateAverageFromCandleSticks(cs));
      }
      case 'ubtc:usd:30': {
        const candleSticls = await this.ccxt.fetchCandleSticks(DOLLAR, 'BTC', '1m', 30);
        return candleSticls.map((cs) => utils.calculateAverageFromCandleSticks(cs));
      }
      case 'uusdc:usd':
        return this.ccxt.fetchTickers(DOLLAR, 'USDC');
      case 'uusdc:usd:30': {
        const candleSticls = await this.ccxt.fetchCandleSticks(DOLLAR, 'USDC', '1m', 30);
        return candleSticls.map((cs) => utils.calculateAverageFromCandleSticks(cs));
      }
      // TODO: remove below two cases
      case 'ubtc:uusdc':
        return this.ccxt.fetchTickers(DOLLAR, 'BTC');
      case 'ubtc:uusdc:30': {
        const candleSticls = await this.ccxt.fetchCandleSticks(DOLLAR, 'BTC', '1m', 30);
        return candleSticls.map((cs) => utils.calculateAverageFromCandleSticks(cs));
      }

      default:
        throw new Error(`Invalid market id: ${marketID}`);
    }
  }

  // async convertToUsdTickers(tickers: Ticker[]) {
  //   // const priceRate = await this.getLatestFiatCurrencyPrices();

  //   const convertedTickers: Ticker[] = [];
  //   tickers.forEach((ticker) => {
  //     if (ticker.market.quote === 'USD') {
  //       convertedTickers.push(ticker);
  //       return;
  //     }
  //     // if (ticker.market.quote in priceRate.rates) {
  //     //   const usdPrice = ticker.data.lastPrice / priceRate.rates[ticker.market.quote];

  //     //   convertedTickers.push({
  //     //     market: ticker.market,
  //     //     data: {
  //     //       ...ticker.data,
  //     //       lastPrice: usdPrice,
  //     //     },
  //     //   });
  //     // }
  //   });
  //   return convertedTickers;
  // }

  getBaseCurrency(marketID: string) {
    switch (marketID) {
      case 'ubtc:jpy':
      case 'ubtc:jpy:30':
        return 'JPY';
      case 'ubtc:eur':
      case 'ubtc:eur:30': {
        return 'EUR';
      }
      case 'ubtc:usd':
      case 'ubtc:usd:30':
      case 'uusdc:usd':
      case 'uusdc:usd:30': {
        return 'USD';
      }
    }
    return null;
  }

  // async convertUsdPrice(marketID: string, price: number) {
  //   // TODO: remove below two cases
  //   switch (marketID) {
  //     case 'ubtc:uusdc':
  //     case 'ubtc:uusdc:30': {
  //       return price;
  //     }
  //   }

  //   const currency = this.getBaseCurrency(marketID);
  //   if (currency == "USD") {
  //     return price;
  //   }

  //   // const priceRate = await this.getLatestFiatCurrencyPrices();
  //   // if (currency && currency in priceRate.rates) {
  //     // const currencyPrice = priceRate.rates[currency] * price;
  //     // return currencyPrice;
  //   // }
  //   return null;
  // }

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
      const response = await ununificlient.rest.pricefeed.allRawPrices(this.sdk, marketID);
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
      previousPrices.map((price) => ({
        market_id: price.market_id || '',
        oracle_address: price.oracle_address || '',
        price: price.price || '',
        expiry: price.expiry || '',
      })),
      marketID,
      address.toString(),
    );

    if (previousPrice === undefined) {
      console.log(`no previous price for ${marketID}, posting...`);
      return false;
    }

    if (previousPrice !== undefined && !this.checkPriceExpiring(previousPrice)) {
      const percentChange = utils.getPercentChange(
        Number.parseFloat(previousPrice.price),
        fetchedPrice,
      );
      console.log('percentChange', percentChange);
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
    address: AccAddress,
    // account: proto.cosmos.auth.v1beta1.BaseAccount,
    // index: number,
  ) {
    if (!fetchedPrice) {
      throw new Error('a retreived price is required in order to post a new price');
    }

    // Set up post price transaction parameters
    const newPrice = Math.floor(fetchedPrice * 10 ** 18).toString()
    let expiryDate = new Date();
    expiryDate = new Date(expiryDate.getTime() + Number.parseInt(this.expiry) * 1000);
    const account = await cosmosclient.rest.auth
      .account(this.sdk, address)
      .then((res) =>
        cosmosclient.codec.protoJSONToInstance(
          cosmosclient.codec.castProtoJSONOfProtoAny(res.data?.account),
        ),
      )
      .catch((_) => undefined);
    const baseAccount = convertUnknownAccountToBaseAccount(account);
    if (!baseAccount) {
      throw Error('Unused Account or Unsupported Account Type!');
    }
    const sequence = baseAccount.sequence;

    console.log(`posting price ${newPrice} for ${marketID} with sequence ${sequence.toString()}`);

    const privKey = await this.privKey;

    // build tx
    const msgPostPrice = new ununificlient.proto.ununifi.pricefeed.MsgPostPrice({
      from: baseAccount.address,
      market_id: marketID,
      price: newPrice,
      expiry: new ununificlient.proto.google.protobuf.Timestamp({
        seconds: Long.fromNumber(expiryDate.getTime() / 1000),
      }),
    });

    const txBody = new cosmosclient.proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgPostPrice)],
    });

    // auth info for simulation
    const simulatedAuthInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(privKey.pubKey()),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: sequence,
        },
      ],
      fee: {
        amount: [
          {
            denom: process.env.MINIMUM_GAS_PRICE_DENOM,
            amount: '1',
          },
        ],
        gas_limit: Long.fromString('1'),
      },
    });

    const simulatedTxBuilder = new cosmosclient.TxBuilder(this.sdk, txBody, simulatedAuthInfo);
    const simulatedSignDocBytes = simulatedTxBuilder.signDocBytes(baseAccount.account_number);
    simulatedTxBuilder.addSignature(privKey.sign(simulatedSignDocBytes));
    const txForSimulation = JSON.parse(simulatedTxBuilder.protoJSONStringify());
    delete txForSimulation.auth_info.signer_infos[0].mode_info.multi;

    // Note: google.protobuf.Timestamp type must be converted to rfc3339 string, because it is unmarshaled in backend go process.
    const googleProtobufTimestamp = ununificlient.proto.google.protobuf.Timestamp.fromObject(
      txForSimulation.body.messages[0].expiry,
    );
    const goTimeString = cosmosclient.codec.protobufTimestampToJsDate(googleProtobufTimestamp);
    txForSimulation.body.messages[0].expiry = goTimeString;

    let simulatedResult;
    let gas: cosmosclient.proto.cosmos.base.v1beta1.ICoin;
    let fee: cosmosclient.proto.cosmos.base.v1beta1.ICoin;

    // simulate
    try {
      simulatedResult = await cosmosclient.rest.tx.simulate(this.sdk, {
        tx: txForSimulation,
        tx_bytes: simulatedTxBuilder.txBytes(),
      });
      // console.log('simulate');
      // console.log(simulatedResult);
      const simulatedGasUsed = simulatedResult.data.gas_info?.gas_used;
      const simulatedGasUsedWithMarginNumber = simulatedGasUsed
        ? parseInt(simulatedGasUsed) * 1.1
        : 200000;
      const simulatedGasUsedWithMargin = Math.ceil(simulatedGasUsedWithMarginNumber).toString();
      const simulatedFeeWithMarginNumber =
        parseInt(simulatedGasUsedWithMargin) *
        parseFloat(
          process.env.MINIMUM_GAS_PRICE_AMOUNT ? process.env.MINIMUM_GAS_PRICE_AMOUNT : '0',
        );
      const simulatedFeeWithMargin = Math.ceil(simulatedFeeWithMarginNumber).toString();
      // console.log({
      // simulatedGasUsed,
      // simulatedGasUsedWithMargin,
      // simulatedFeeWithMarginNumber,
      // simulatedFeeWithMargin,
      // });
      gas = {
        denom: process.env.MINIMUM_GAS_PRICE_DENOM,
        amount: simulatedGasUsedWithMargin,
      };
      fee = {
        denom: process.env.MINIMUM_GAS_PRICE_DENOM,
        amount: simulatedFeeWithMargin,
      };
    } catch (e) {
      console.error(e);
      return;
    }

    // auth info for announce
    const authInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(privKey.pubKey()),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: sequence,
        },
      ],
      fee: {
        amount: [fee],
        gas_limit: Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(this.sdk, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(baseAccount.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    // broadcast
    try {
      const res = await cosmosclient.rest.tx.broadcastTx(this.sdk, {
        tx_bytes: txBuilder.txBytes(),
        mode: cosmosclient.rest.tx.BroadcastTxMode.Sync,
      });
      console.log('broadcast');
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
      case 'ubtc:jpy':
      case 'ubtc:jpy:30':
        return 'BTC/JPY';
      case 'ubtc:eur':
      case 'ubtc:eur:30':
        return 'BTC/EUR';
      default:
        throw new Error(`Unsupported martketId: ${marketId}`);
    }
  }
  useBandData(conf: DataProviderConf): boolean {
    return conf.dataProviderType == 'Band';
  }
}
