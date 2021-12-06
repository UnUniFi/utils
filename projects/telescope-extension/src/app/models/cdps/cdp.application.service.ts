import { Key } from '../keys/key.model';
import { CdpService } from './cdp.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { cosmosclient, proto } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
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
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.createCDP(
        key,
        privateKey,
        collateralType,
        collateral,
        principal,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
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
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.drawCDP(
        key,
        privateKey,
        collateralType,
        principal,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
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
    collateralType: string,
    payment: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.repayCDP(
        key,
        privateKey,
        collateralType,
        payment,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
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
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.depositCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
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

  async withdrawCDP(
    key: Key,
    privateKey: string,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.withdrawCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
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
