import { Key } from '../keys/key.model';
import { KeyService } from '../keys/key.service';
import { TxCommonInfrastructureService } from '../tx-common/tx-common.infrastructure.service';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { IAuctionInfrastructure } from './auction.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/cosmos-sdk.service';
import { ununifi } from 'ununifi-client';

@Injectable({
  providedIn: 'root',
})
export class AuctionInfrastructureService implements IAuctionInfrastructure {
  constructor(
    private readonly cosmosSDK: CosmosSDKService,
    private readonly keyService: KeyService,
    private readonly txCommonInfrastructureService: TxCommonInfrastructureService,
  ) {}

  async placeBid(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBuilder = await this.buildPlaceBidTx(key, privateKey, auction_id, amount, gas, fee);
    return await this.txCommonInfrastructureService.announceTx(txBuilder);
  }

  async simulateToPlaceBid(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse> {
    const dummyFee: proto.cosmos.base.v1beta1.ICoin = {
      denom: minimumGasPrice.denom,
      amount: '1',
    };
    const dummyGas: proto.cosmos.base.v1beta1.ICoin = {
      denom: minimumGasPrice.denom,
      amount: '1',
    };
    const SimulatedTxBuilder = await this.buildPlaceBidTx(
      key,
      privateKey,
      auction_id,
      amount,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(SimulatedTxBuilder, minimumGasPrice);
  }

  async buildPlaceBidTx(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const bidder = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, bidder)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('invalid account!');
    }

    // build tx
    const msgPlaceBid = new ununifi.auction.MsgPlaceBid({
      auction_id: cosmosclient.Long.fromString(auction_id),
      bidder: bidder.toString(),
      amount,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgPlaceBid)],
    });
    const authInfo = new proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
          mode_info: {
            single: {
              mode: proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        amount: [fee],
        gas_limit: cosmosclient.Long.fromString(gas.amount ? gas.amount : '300000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return txBuilder;
  }
}
