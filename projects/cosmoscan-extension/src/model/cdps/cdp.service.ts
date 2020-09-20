import { Injectable } from '@angular/core';
import { BroadcastTxCommitResult, Coin } from 'cosmos-client/api';
import { CdpInfrastructureService } from './cdp.infrastructure.service';
import { Key } from '../keys/key.model';
import { AccAddress } from 'cosmos-client';

export interface ICdpInfrastructure {
  createCDP(
    key: Key,
    privateKey: string,
    collateral: Coin,
    principal: Coin,
  ): Promise<any>;
  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: AccAddress,
    collateral: Coin,
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
    collateral: Coin,
    principal: Coin,
  ): Promise<BroadcastTxCommitResult> {
    return this.iCdpInfrastructure.createCDP(
      key,
      privateKey,
      collateral,
      principal,
    );
  }

  depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: AccAddress,
    collateral: Coin,
  ) {
    return this.iCdpInfrastructure.depositCDP(
      key,
      privateKey,
      ownerAddr,
      collateral,
    );
  }
}
