import { CurrentPriceData } from './domain/market-price';
import cosmosclient from '@cosmos-client/core';
import Long from 'long';
import ununificlient from 'ununifi-client';
import { AccAddress } from '@cosmos-client/core/cjs/types';
import { convertUnknownAccountToBaseAccount } from './converter';

require('dotenv').config();
require('log-timestamp');
const IS_DEBUG_MODE = process.env.MODE == 'debug';

/**
 * Post Price data to UnUniFi chain.
 */
export class PostPrice {
  private sdk: cosmosclient.CosmosSDK;
  private privKey: Promise<cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey>;

  constructor(
    private expiry: string,
    url: string,
    chainID: string,
    mnemonic: string,
    bech32Prefix: string,
  ) {
    if (!expiry) {
      throw new Error('must specify an expiration time');
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
  }

  /**
   * Post prices for each market
   */
  async postPrices(prices: CurrentPriceData[]) {
    const privKey = await this.privKey;
    const address = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    for (const priceData of prices) {
      try {
        const res: any = await this.postNewPrice(priceData.price, priceData.marketID, address);
        if (IS_DEBUG_MODE) {
          console.log('res', res);
        }
        // if (res.data.code !== undefined) {
        //   throw new Error(res.data.raw_log);
        // }
      } catch (e) {
        console.log(`could not post ${priceData.marketID} price`);
        console.log(e);
        return;
      }
    }
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
}
