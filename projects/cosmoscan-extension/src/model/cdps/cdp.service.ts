import { Injectable } from '@angular/core';
import { CdpInfrastructureService } from './cdp.infrastructure.service';
import { Key } from '../keys/key.model';
import { cosmosclient, cosmos, rest } from 'cosmos-client';

export interface ICdpInfrastructure {
  createCDP(
    key: Key,
    privateKey: string,
    collateral: cosmos.base.v1beta1.ICoin,
    principal: cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  drawCDP(
    key: Key,
    privateKey: string,
    denom: string,
    principal: cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  repayCDP(
    key: Key,
    privateKey: string,
    denom: string,
    payment: cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: cosmos.base.v1beta1.ICoin,
  ): Promise<any>;

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: cosmos.base.v1beta1.ICoin,
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
    collateral: cosmos.base.v1beta1.ICoin,
    principal: cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.createCDP(
      key,
      privateKey,
      collateral,
      principal,
    );
  }

  drawCDP(
    key: Key,
    privateKey: string,
    denom: string,
    principal: cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.drawCDP(
      key,
      privateKey,
      denom,
      principal,
    );
  }

  repayCDP(
    key: Key,
    privateKey: string,
    denom: string,
    payment: cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.repayCDP(
      key,
      privateKey,
      denom,
      payment,
    );
  }

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.depositCDP(
      key,
      privateKey,
      ownerAddr,
      collateral,
    );
  }

  withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: cosmos.base.v1beta1.ICoin,
  ) {
    return this.iCdpInfrastructure.withdrawCDP(
      key,
      privateKey,
      ownerAddr,
      collateral,
    );
  }
}
