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
  drawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: AccAddress,
    denom: string,
    principal: Coin,
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

  drawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: AccAddress,
    denom: string,
    principal: Coin,
  ): Promise<BroadcastTxCommitResult> {
    return this.iCdpInfrastructure.drawCDP(
      key,
      privateKey,
      ownerAddr,
      denom,
      principal,
    );
  }
}
