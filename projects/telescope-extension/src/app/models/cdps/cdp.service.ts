import { Key } from '../keys/key.model';
import { CdpInfrastructureService } from './cdp.infrastructure.service';
import { Injectable } from '@angular/core';
import { cosmosclient, proto, rest } from '@cosmos-client/core';

export interface ICdpInfrastructure {
  createCDP(
    key: Key,
    privateKey: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  drawCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  repayCDP(
    key: Key,
    privateKey: string,
    collateralType: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;
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
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.createCDP(key, privateKey, collateral, principal);
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
  ) {
    return this.iCdpInfrastructure.repayCDP(key, privateKey, collateralType, payment);
  }

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.depositCDP(key, privateKey, ownerAddr, collateral);
  }

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.withdrawCDP(key, privateKey, ownerAddr, collateral);
  }
}
