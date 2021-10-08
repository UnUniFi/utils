import { Key } from '../keys/key.model';
import { CdpService } from './cdp.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { cosmosclient, proto } from 'cosmos-client';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class CdpApplicationService {
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly loadingDialog: LoadingDialogService,
    private readonly cdp: CdpService,
  ) {}

  async createCDP(
    key: Key,
    privateKey: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: any = await this.cdp.createCDP(key, privateKey, collateral, principal);
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txhash = res.txhash;
    } catch (error) {
      const msg = (error as Error).toString();
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

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async drawCDP(
    key: Key,
    privateKey: string,
    denom: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: any = await this.cdp.drawCDP(key, privateKey, denom, principal);
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txhash = res.txhash;
    } catch (error) {
      const msg = (error as Error).toString();
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

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async repayCDP(
    key: Key,
    privateKey: string,
    denom: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: any = await this.cdp.repayCDP(key, privateKey, denom, payment);
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txhash = res.txhash;
    } catch (error) {
      const msg = (error as Error).toString();
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

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async depositCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    console.log(
      'key',
      key,
      'privateKey',
      privateKey,
      'ownerAddr',
      ownerAddr,
      'collateral',
      collateral,
    );

    let txhash: string | undefined;
    try {
      const res: any = await this.cdp.depositCDP(key, privateKey, ownerAddr, collateral);
      console.log('res', res);
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txhash = res.txhash;
    } catch (error) {
      const msg = (error as Error).toString();
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

    /* Disable for Debug */
    // const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    // window.location.href = redirectUrl;
  }

  async withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: any = await this.cdp.withdrawCDP(key, privateKey, ownerAddr, collateral);
      console.log('res', res);
      if (res.code !== undefined && res.raw_log !== undefined) {
        throw new Error(res.raw_log);
      }
      txhash = res.txhash;
    } catch (error) {
      const msg = (error as Error).toString();
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

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }
}
