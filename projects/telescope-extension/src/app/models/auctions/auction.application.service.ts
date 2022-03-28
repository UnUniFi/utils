import { TxFeeConfirmDialogComponent } from '../../views/tx-fee-confirm-dialog/tx-fee-confirm-dialog.component';
import { Key } from '../keys/key.model';
import { KeyService } from '../keys/key.service';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { AuctionService } from './auction.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { proto } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class AuctionApplicationService {
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog,
    private readonly loadingDialog: LoadingDialogService,
    private readonly auction: AuctionService,
    private readonly key: KeyService,
  ) {}

  async placeBid(
    key: Key,
    privateKey: Uint8Array,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;

    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    try {
      simulatedResultData = await this.auction.simulateToPlaceBid(
        key,
        privateKey,
        auction_id,
        amount,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }

    const dialogRef = this.loadingDialog.open('Bidding...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.auction.placeBid(
        key,
        privateKey,
        auction_id,
        amount,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('Invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully Bid', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }
}
