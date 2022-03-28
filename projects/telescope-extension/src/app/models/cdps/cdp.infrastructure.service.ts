import { Key } from '../keys/key.model';
import { KeyService } from '../keys/key.service';
import { TxCommonInfrastructureService } from '../tx-common/tx-common.infrastructure.service';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { ICdpInfrastructure } from './cdp.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/cosmos-sdk.service';
import { ununifi } from 'ununifi-client';

@Injectable({
  providedIn: 'root',
})
export class CdpInfrastructureService implements ICdpInfrastructure {
  constructor(
    private readonly cosmosSDK: CosmosSDKService,
    private readonly keyService: KeyService,
    private readonly txCommonInfrastructureService: TxCommonInfrastructureService,
  ) {}

  async createCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBuilder = await this.buildCreateCDPTx(
      key,
      privateKey,
      collateralType,
      collateral,
      principal,
      gas,
      fee,
    );
    return await this.txCommonInfrastructureService.announceTx(txBuilder);
  }

  async simulateToCreateCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
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
    const simulatedTxBuilder = await this.buildCreateCDPTx(
      key,
      privateKey,
      collateralType,
      collateral,
      principal,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(simulatedTxBuilder, minimumGasPrice);
  }

  async buildCreateCDPTx(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
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
    const msgCreateCdp = new ununifi.cdp.MsgCreateCdp({
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

  async drawCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBuilder = await this.buildDrawCDPTx(
      key,
      privateKey,
      collateralType,
      principal,
      gas,
      fee,
    );
    return await this.txCommonInfrastructureService.announceTx(txBuilder);
  }

  async simulateToDrawCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
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
    const simulatedTxBuilder = await this.buildDrawCDPTx(
      key,
      privateKey,
      collateralType,
      principal,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(simulatedTxBuilder, minimumGasPrice);
  }

  async buildDrawCDPTx(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
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

    const msgDrawDebt = new ununifi.cdp.MsgDrawDebt({
      sender: sender.toString(),
      collateral_type: collateralType,
      principal,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDrawDebt)],
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

  async repayCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    repayment: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBuilder = await this.buildRepayCDPTx(
      key,
      privateKey,
      collateralType,
      repayment,
      gas,
      fee,
    );
    return await this.txCommonInfrastructureService.announceTx(txBuilder);
  }

  async simulateToRepayCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    repayment: proto.cosmos.base.v1beta1.ICoin,
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
    const simulatedTxBuilder = await this.buildRepayCDPTx(
      key,
      privateKey,
      collateralType,
      repayment,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(simulatedTxBuilder, minimumGasPrice);
  }

  async buildRepayCDPTx(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    repayment: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
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

    const msgRepayDebt = new ununifi.cdp.MsgRepayDebt({
      sender: sender.toString(),
      collateral_type: collateralType,
      payment: repayment,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgRepayDebt)],
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

  async depositCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBUilder = await this.buildDepositCDPTx(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      gas,
      fee,
    );
    return await this.txCommonInfrastructureService.announceTx(txBUilder);
  }

  async simulateToDepositCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
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
    const simulatedTxBUilder = await this.buildDepositCDPTx(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(simulatedTxBUilder, minimumGasPrice);
  }

  async buildDepositCDPTx(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
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
    const msgDepositCDP = new ununifi.cdp.MsgDeposit({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateralType,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgDepositCDP)],
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

  async withdrawCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    const txBuilder = await this.buildWithdrawCDPTx(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      gas,
      fee,
    );
    return await this.txCommonInfrastructureService.announceTx(txBuilder);
  }

  async simulateToWithdrawCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
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
    const simulatedTxBuilder = await this.buildWithdrawCDPTx(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      dummyGas,
      dummyFee,
    );
    return await this.txCommonInfrastructureService.simulateTx(simulatedTxBuilder, minimumGasPrice);
  }

  async buildWithdrawCDPTx(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<cosmosclient.TxBuilder> {
    const sdk = await this.cosmosSDK.sdk();
    const privKey = this.keyService.getPrivKey(key.type, privateKey);
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
    const msgWithdraw = new ununifi.cdp.MsgWithdraw({
      depositor: sender.toString(),
      owner: ownerAddr.toString(),
      collateral,
      collateral_type: collateralType,
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.packAny(msgWithdraw)],
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
