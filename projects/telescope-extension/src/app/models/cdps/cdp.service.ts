import { Key } from '../keys/key.model';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { CdpInfrastructureService } from './cdp.infrastructure.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';

export interface ICdpInfrastructure {
  createCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  simulateToCreateCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse>;

  drawCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  repayCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  simulateToDepositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse>;

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  simulateToWithdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class CdpService {
  private readonly iCdpInfrastructure: ICdpInfrastructure;
  constructor(readonly cdpInfrastructure: CdpInfrastructureService) {
    this.iCdpInfrastructure = cdpInfrastructure;
  }

  createCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.createCDP(
      key,
      privateKey,
      collateralType,
      collateral,
      principal,
      gas,
      fee,
    );
  }

  simulateToCreateCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse> {
    return this.iCdpInfrastructure.simulateToCreateCDP(
      key,
      privateKey,
      collateralType,
      collateral,
      principal,
      minimumGasPrice,
    );
  }

  drawCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.drawCDP(key, privateKey, collateralType, principal);
  }

  repayCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.repayCDP(key, privateKey, collateralType, payment);
  }

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.depositCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      gas,
      fee,
    );
  }

  simulateToDepositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse> {
    return this.iCdpInfrastructure.simulateToDepositCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      minimumGasPrice,
    );
  }

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.withdrawCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      gas,
      fee,
    );
  }

  simulateToWithdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse> {
    return this.iCdpInfrastructure.simulateToWithdrawCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
      minimumGasPrice,
    );
  }
}
