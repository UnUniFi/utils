import { Key } from '../keys/key.model';
import { AuctionService } from './auction.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { proto } from 'cosmos-client';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class AuctionApplicationService {
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly loadingDialog: LoadingDialogService,
    private readonly auction: AuctionService,
  ) {}

  async placeBid(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
  ) {
    const dialogRef = this.loadingDialog.open('Bidding');

    let txhash: string | undefined;
    try {
      const res: any = await this.auction.placeBid(key, privateKey, auction_id, amount);
      console.log(res.data.tx_response);
      console.log(res.data.tx_response.raw_log);
      if (res.data.tx_response.code !== 0 && res.data.tx_response.raw_log !== undefined) {
        throw new Error(res.data.tx_response.raw_log);
      }
      txhash = res.data.tx_response.txhash;
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
