import { KeyInfrastructureService } from '../keys/key.infrastructure.service';
import { Key } from '../keys/key.model';
import { IKeyInfrastructure } from '../keys/key.service';
import { ICdpInfrastructure } from './cdp.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
import { botany } from 'botany-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/cosmos-sdk.service';

@Injectable({
  providedIn: 'root',
})
export class CdpInfrastructureService implements ICdpInfrastructure {
  private readonly iKeyInfrastructure: IKeyInfrastructure;
  constructor(
    private readonly cosmosSDK: CosmosSDKService,
    keyInfrastructure: KeyInfrastructureService,
  ) {
    this.iKeyInfrastructure = keyInfrastructure;
  }

  async createCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('invalid account!');
    }

    // build tx
    const msgCreateCdp = new botany.cdp.MsgCreateCdp({
      sender: sender.toString(),
      collateral,
      principal,
      collateral_type: collateralType,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgCreateCdp)],
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

    const result = await rest.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.tx.BroadcastTxMode.Block,
    });

    // check error
    if (result.data.tx_response?.code !== 0) {
      throw Error(result.data.tx_response?.raw_log);
    }

    return result.data;
  }

  async drawCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('invalid account!');
    }

    const msgDrawdebtCdp = new botany.cdp.MsgDrawDebt({
      sender: sender.toString(),
      collateral_type: collateralType,
      principal,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
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

    const result = await rest.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.tx.BroadcastTxMode.Block,
    });

    // check error
    if (result.data.tx_response?.code !== 0) {
      throw Error(result.data.tx_response?.raw_log);
    }

    return result.data;
  }

  async repayCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    const msgDrawdebtCdp = new botany.cdp.MsgRepayDebt({
      sender: sender.toString(),
      collateral_type: collateralType,
      payment,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
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

    return await rest.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.tx.BroadcastTxMode.Block,
    });
  }

  async depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('invalid account!');
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgDeposit({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateralType,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
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

    const result = await rest.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.tx.BroadcastTxMode.Block,
    });

    // check error
    if (result.data.tx_response?.code !== 0) {
      throw Error(result.data.tx_response?.raw_log);
    }

    return result.data;
  }

  async withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackCosmosAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('invalid account!');
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgWithdraw({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateralType,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
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

    const result = await rest.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.tx.BroadcastTxMode.Block,
    });

    // check error
    if (result.data.tx_response?.code !== 0) {
      throw Error(result.data.tx_response?.raw_log);
    }

    return result.data;
  }
}
