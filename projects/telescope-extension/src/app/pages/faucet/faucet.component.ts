import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InlineResponse20027 } from 'cosmos-client/esm/openapi';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { FaucetRequest } from 'projects/telescope-extension/src/app/models/faucets/faucet.model';
import { FaucetService } from 'projects/telescope-extension/src/app/models/faucets/faucet.service';
import { BehaviorSubject } from 'rxjs';
import { LoadingDialogService } from 'ng-loading-dialog';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  hasFaucet?: boolean;
  faucetURL?: string;
  denoms?: string[];
  creditAmount?: number;
  maxCredit?: number;
  address?: string;
  balancesBeforeFaucetRequest$?: BehaviorSubject<InlineResponse20027>;
  balancesAfterFaucetRequest$?: BehaviorSubject<InlineResponse20027>;
  faucetRequestSuccess$?: BehaviorSubject<boolean>;

  constructor(
    private configS: ConfigService,
    private faucetService: FaucetService,
    private readonly snackBar: MatSnackBar,
    private readonly loadingDialog: LoadingDialogService,
  ) {
    this.hasFaucet = this.configS.config.extension?.faucet?.hasFaucet;
    this.faucetURL = this.configS.config.extension?.faucet?.faucetURL;
    this.denoms = this.configS.config.extension?.faucet?.denoms;
    this.creditAmount = this.configS.config.extension?.faucet?.creditAmount;
    this.maxCredit = this.configS.config.extension?.faucet?.maxCredit;
  }

  ngOnInit(): void {}

  appPostFaucetRequested(faucetRequest: FaucetRequest): void {
    const dialogRef = this.loadingDialog.open('Claiming...');
    const subscription = this.faucetService.postFaucetRequest$(faucetRequest).subscribe(
      (faucetResponse) => {
        console.log(faucetResponse)
        dialogRef.close();
        subscription.unsubscribe();
        if (faucetResponse.transfers.length > 0) {
          const resultList = faucetResponse.transfers.map((transfer) => {
            if (transfer.status === 'ok') {
              return true;
            } else {
              return false;
            }
          })
          const result = resultList.every((element) => element === true);
          if (result) {
            this.snackBar.open('Success', undefined, { duration: 3000 });
          } else {
            this.snackBar.open('Failed', undefined, { duration: 6000 });
          }
        } else {
          this.snackBar.open('Failed', undefined, { duration: 6000 });
        }
      },
      (error) => {
        console.error(error);
        dialogRef.close();
        subscription.unsubscribe()
        this.snackBar.open('Failed', undefined, { duration: 6000 });
      },
    );
  }
}
