import { Injectable } from '@angular/core';
import { cosmosclient, cosmos, rest } from 'cosmos-client';
import { CosmosSDKService } from '@model-ce/cosmos-sdk.service';
import { Key } from '../keys/key.model';
import { ICdpInfrastructure } from './cdp.service';
import { KeyInfrastructureService } from '../keys/key.infrastructure.service';
import { IKeyInfrastructure } from '../keys/key.service';
import { botany } from 'botany-client';

@Injectable({
  providedIn: 'root',
})
export class CdpInfrastructureService implements ICdpInfrastructure {
  private readonly iKeyInfrastructure: IKeyInfrastructure;
  constructor(private readonly cosmosSDK: CosmosSDKService, keyInfrastructure: KeyInfrastructureService) {
    this.iKeyInfrastructure = keyInfrastructure;
  }

  async createCDP(key: Key, privateKey: string, collateral: cosmos.base.v1beta1.ICoin, principal: cosmos.base.v1beta1.ICoin) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgCreateCdp = new botany.cdp.MsgCreateCdp({
      sender: sender.toString(),
      collateral,
      principal,
      collateral_type: collateral.denom,
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgCreateCdp)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
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
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }

  async drawCDP(key: Key, privateKey: string, denom: string, principal: cosmos.base.v1beta1.ICoin) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgDrawDebt({
      sender: sender.toString(),
      collateral_type: denom,
      principal,
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
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
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }

  async repayCDP(key: Key, privateKey: string, denom: string, payment: cosmos.base.v1beta1.ICoin) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgRepayDebt({
      sender: sender.toString(),
      collateral_type: denom,
      payment,
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
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
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }

  async depositCDP(key: Key, privateKey: string, ownerAddr: cosmosclient.AccAddress, collateral: cosmos.base.v1beta1.ICoin) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgDeposit({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateral.denom,
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
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
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }

  async withdrawCDP(key: Key, privateKey: string, ownerAddr: cosmosclient.AccAddress, collateral: cosmos.base.v1beta1.ICoin) {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const pubKey = privKey.pubKey();
    const sender = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());

    // get account info
    const account = await rest.cosmos.auth
      .account(sdk.rest, sender)
      .then((res) => res.data.account && cosmosclient.codec.unpackAny(res.data.account))
      .catch((_) => undefined);

    if (!(account instanceof cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    // build tx
    const msgDrawdebtCdp = new botany.cdp.MsgWithdraw({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateral.denom,
    });

    const txBody = new cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawdebtCdp)],
    });
    const authInfo = new cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.packAny(pubKey),
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
    const txBuilder = new cosmosclient.TxBuilder(sdk.rest, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    return await rest.cosmos.tx.broadcastTx(sdk.rest, {
      tx_bytes: txBuilder.txBytes(),
      mode: rest.cosmos.tx.BroadcastTxMode.Block,
    });
  }
}
