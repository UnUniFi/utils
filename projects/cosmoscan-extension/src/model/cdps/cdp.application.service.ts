import { Injectable } from '@angular/core';
import { Coin } from 'cosmos-client/api';
import { Key } from '../keys/key.model';
import { CdpService } from './cdp.service';

@Injectable({
  providedIn: 'root',
})
export class CdpApplicationService {
  constructor(private readonly cdp: CdpService) {}

  async create(
    key: Key,
    privateKey: string,
    collateral: Coin,
    principal: Coin,
  ) {
    const res = await this.cdp.createCDP(
      key,
      privateKey,
      collateral,
      principal,
    );
    console.log('CdpApplicationService::res', res);
  }
}
