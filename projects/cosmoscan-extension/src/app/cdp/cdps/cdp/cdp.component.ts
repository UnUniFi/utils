import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmosSDKService } from '@model-ce/index';
import {
  getSpotPriceStream,
  getLiquidationPriceStream,
} from '../../../../utils/stream';
import { getWithdrawLimit, getIssueLimit } from '../../../../utils/function';

import { AccAddress } from 'cosmos-client';
import {
  CDP,
  CdpParameters,
  Deposit,
} from 'projects/cosmoscan-extension/src/x/cdp/api';
import {
  cdpCdpsCdpDepositsOwnerDenomGet,
  cdpCdpsCdpOwnerDenomGet,
  cdpParametersGet,
} from 'projects/cosmoscan-extension/src/x/cdp/module';
import { from, Observable, pipe, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Price } from 'projects/cosmoscan-extension/src/x/pricefeed/api';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  owner$: Observable<string>;
  denom$: Observable<string>;
  params$: Observable<CdpParameters>;
  cdp$: Observable<CDP>;
  deposits$: Observable<Deposit[]>;

  spotPrice$: Observable<Price>;
  liquidationPrice$: Observable<Price>;
  withdrawLimit$: Observable<number>;
  issueLimit$: Observable<number>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
    const ownerAndDenom$ = zip(this.owner$, this.denom$);

    this.params$ = from(cdpParametersGet(this.cosmosSdk.sdk)).pipe(
      map((data) => data.result),
    );

    this.cdp$ = ownerAndDenom$.pipe(
      mergeMap(([ownerAddr, denom]: string[]) =>
        cdpCdpsCdpOwnerDenomGet(
          this.cosmosSdk.sdk,
          AccAddress.fromBech32(ownerAddr),
          denom,
        ),
      ),
      map((data) => data.result),
    );

    this.deposits$ = ownerAndDenom$.pipe(
      mergeMap(([ownerAddr, denom]: string[]) =>
        cdpCdpsCdpDepositsOwnerDenomGet(
          this.cosmosSdk.sdk,
          AccAddress.fromBech32(ownerAddr),
          denom,
        ),
      ),
      map((data) => data.result),
    );

    this.spotPrice$ = getSpotPriceStream(
      this.cosmosSdk.sdk,
      this.denom$,
      this.params$,
    );

    this.liquidationPrice$ = getLiquidationPriceStream(
      this.cosmosSdk.sdk,
      this.denom$,
      this.params$,
    );

    this.withdrawLimit$ = zip(this.cdp$, this.params$, this.spotPrice$).pipe(
      map(([cdp, params, price]) => getWithdrawLimit(cdp, params, price)),
    );

    this.issueLimit$ = zip(
      this.cdp$,
      this.params$,
      this.liquidationPrice$,
    ).pipe(map(([cdp, params, price]) => getIssueLimit(cdp, params, price)));
  }

  ngOnInit(): void {}
}
