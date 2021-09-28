import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cosmosclient, rest } from 'cosmos-client';
import { InlineResponse20027 } from 'cosmos-client/esm/openapi';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/cosmos-sdk.service';
import { FaucetRequest } from 'projects/telescope-extension/src/app/models/faucets/faucet.model';
import { FaucetService } from 'projects/telescope-extension/src/app/models/faucets/faucet.service';
import { BehaviorSubject, combineLatest, timer } from 'rxjs';
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
    private cosmosSDK: CosmosSDKService,
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
    this.faucetService
      .postFaucetRequest$(faucetRequest)
      .subscribe((faucetResponse) => console.log(faucetResponse));
    const address = cosmosclient.AccAddress.fromString(faucetRequest.address);
    this.cosmosSDK.sdk$.subscribe((sdk) =>
      rest.cosmos.bank
        .allBalances(sdk.rest, address)
        .then((res) => (this.balancesBeforeFaucetRequest$ = new BehaviorSubject(res.data))),
    );
    this.faucetService.postFaucetRequest$(faucetRequest).subscribe(
      (faucetResponse) => console.log(faucetResponse),
      (error) => {
        console.error(error);
      },
    );
    const timer$ = timer(0, 2 * 1000);
    const combinedLatest$ = combineLatest([timer$, this.cosmosSDK.sdk$]);
    const subscription = combinedLatest$.subscribe(
      // eslint-disable-next-line no-unused-vars
      ([_, sdk]) => {
        console.log('timer', _);
        rest.cosmos.bank.allBalances(sdk.rest, address).then((res) => {
          if (this.balancesAfterFaucetRequest$ === undefined) {
            this.balancesAfterFaucetRequest$ = new BehaviorSubject(res.data);
          } else {
            this.balancesAfterFaucetRequest$.next(res.data);
          }
        });
        if (
          this.balancesBeforeFaucetRequest$ !== undefined &&
          this.balancesAfterFaucetRequest$ !== undefined
        ) {
          const balancesBeforeFaucetRequest = this.balancesBeforeFaucetRequest$.getValue();
          const balancesAfterFaucetRequest = this.balancesAfterFaucetRequest$.getValue();
          const balancesBefore = balancesBeforeFaucetRequest.balances
            ? balancesBeforeFaucetRequest.balances
            : [];
          const balancesAfter = balancesAfterFaucetRequest.balances
            ? balancesAfterFaucetRequest.balances
            : [];
          const resultList: {
            amount: number;
            denom: string;
            matchedAmountBefore?: string;
            matchedAmountAfter?: string;
            amountDiff: number;
            result: boolean;
          }[] = faucetRequest.coins.map((coin) => {
            const matchedBalancesBefore =
              balancesBefore.length > 0
                ? balancesBefore.filter((balance) => balance.denom === coin.denom)
                : [];
            const matchedBalancesAfter =
              balancesAfter.length > 0
                ? balancesAfter.filter((balance) => balance.denom === coin.denom)
                : [];
            const matchedAmountBefore =
              matchedBalancesBefore.length > 0 ? matchedBalancesBefore[0].amount : '0';
            const matchedAmountAfter =
              matchedBalancesAfter.length > 0 ? matchedBalancesAfter[0].amount : '0';
            const amountDiff =
              parseInt(matchedAmountAfter ? matchedAmountAfter : '0', 10) -
              parseInt(matchedAmountBefore ? matchedAmountBefore : '0', 10);
            return {
              amount: coin.amount,
              denom: coin.denom,
              matchedAmountBefore,
              matchedAmountAfter,
              amountDiff,
              result: amountDiff - coin.amount === 0,
            };
          });
          console.log(resultList);
          const result = resultList.every((element) => element.result === true);
          console.log(result);
          if (this.faucetRequestSuccess$ === undefined) {
            this.faucetRequestSuccess$ = new BehaviorSubject(result);
            this.faucetRequestSuccess$.subscribe((finalResult) => {
              if (finalResult) {
                console.log('faucetRequest Success!');
                dialogRef.close();
                this.snackBar.open('Success', undefined, { duration: 3000 });
                subscription.unsubscribe();
              } else {
                console.log('faucetRequest is not yet completed...');
              }
            });
          } else {
            this.faucetRequestSuccess$.next(result);
          }
        }
      },
    );
  }
}
