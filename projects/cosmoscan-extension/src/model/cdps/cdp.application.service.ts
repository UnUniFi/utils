import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';
import { LoadingDialogService } from 'ng-loading-dialog';
import { Key } from '../keys/key.model';
import { CdpService } from './cdp.service';

@Injectable({
  providedIn: 'root',
})
export class CdpApplicationService {
  constructor(
    private readonly loadingDialog: LoadingDialogService,
    private readonly snackBar: MatSnackBar,
    private readonly cdp: CdpService,
  ) {}

  async createCDP(
    key: Key,
    privateKey: string,
    collateral: Coin,
    principal: Coin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txHash: string | undefined;
    try {
      const res: any = await this.cdp.createCDP(
        key,
        privateKey,
        collateral,
        principal,
      );
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txHash = res.txhash;
    } catch (error) {
      const msg = error.toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });
  }

  async repayCDP(
    key: Key,
    privateKey: string,
    ownerAddr: AccAddress,
    denom: string,
    payment: Coin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txHash: string | undefined;
    try {
      const res: any = await this.cdp.repayCDP(
        key,
        privateKey,
        ownerAddr,
        denom,
        payment,
      );
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txHash = res.txhash;
    } catch (error) {
      const msg = error.toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });
  }
}
