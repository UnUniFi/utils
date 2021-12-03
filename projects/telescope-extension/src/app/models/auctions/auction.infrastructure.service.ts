import { KeyInfrastructureService } from '../keys/key.infrastructure.service';
import { Key } from '../keys/key.model';
import { IKeyInfrastructure } from '../keys/key.service';
import { IAuctionInfrastructure } from './auction.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';
import { botany } from 'botany-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/cosmos-sdk.service';

@Injectable({
  providedIn: 'root',
})
export class AuctionInfrastructureService implements IAuctionInfrastructure {
  private readonly iKeyInfrastructure: IKeyInfrastructure;
  constructor(
    private readonly cosmosSDK: CosmosSDKService,
    keyInfrastructure: KeyInfrastructureService,
  ) {
    this.iKeyInfrastructure = keyInfrastructure;
  }

  async placeBid(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const bidder = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, bidder)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // Todo: collateral_type should be set more appropriately.
    // build tx
    const msgPlaceBid = new botany.auction.MsgPlaceBid({
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
        gas_limit: cosmosclient.Long.fromString('300000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }
}
