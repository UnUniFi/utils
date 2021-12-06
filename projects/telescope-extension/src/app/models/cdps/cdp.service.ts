import { Key } from '../keys/key.model';
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
  ): Promise<InlineResponse20075>;

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
  ): Promise<InlineResponse20075>;

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;
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
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.createCDP(
      key,
      privateKey,
      collateralType,
      collateral,
      principal,
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
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.depositCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
    );
  }

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iCdpInfrastructure.withdrawCDP(
      key,
      privateKey,
      ownerAddr,
      collateralType,
      collateral,
    );
  }
}
