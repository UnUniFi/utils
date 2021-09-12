import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmosSDKService } from '@model-ce/index';
import {
  getSpotPriceStream,
  getLiquidationPriceStream,
} from '../../../../utils/stream';
import { getWithdrawLimit, getIssueLimit } from '../../../../utils/function';
import { cosmosclient } from 'cosmos-client';
import { rest, botany } from 'botany-client'
import { combineLatest, from, Observable, pipe, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { InlineResponse2004Cdp1, InlineResponse2006Deposits } from 'projects/botany-client/src/openapi-eurx';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  owner$: Observable<string>;
  denom$: Observable<string>;
  params$: Observable<botany.cdp.IParams>;
  cdp$: Observable<InlineResponse2004Cdp1>;
  deposits$: Observable<InlineResponse2006Deposits[]>;

  spotPrice$: Observable<botany.pricefeed.ICurrentPrice>;
  liquidationPrice$: Observable<botany.pricefeed.ICurrentPrice>;
  withdrawLimit$: Observable<number>;
  issueLimit$: Observable<number>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
    const ownerAndDenom$ = combineLatest([this.owner$, this.denom$, this.cosmosSdk.sdk$]);

    this.params$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => rest.botany.cdp.params(sdk.rest)),
      map((data) => data.data.params!),
    );

    this.cdp$ = ownerAndDenom$.pipe(
      mergeMap(([ownerAddr, denom, sdk]) =>
        rest.botany.cdp.cdp(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          denom,
        ),
      ),
      map(res => res.data.cdp!),
    );

    this.deposits$ = ownerAndDenom$.pipe(
      mergeMap(([ownerAddr, denom, sdk]) =>
        rest.botany.cdp.allDeposits(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          denom,
        ),
      ),
      map(res => res.data.deposits || []),
    );

    this.spotPrice$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => getSpotPriceStream(
        sdk.rest,
        this.denom$,
        this.params$,
      )));

    this.liquidationPrice$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => getLiquidationPriceStream(
        sdk.rest,
        this.denom$,
        this.params$,
      )));

    this.withdrawLimit$ = zip(this.cdp$, this.params$, this.spotPrice$).pipe(
      map(([cdp, params, price]) => getWithdrawLimit(cdp.cdp!, params, price)),
    );

    this.issueLimit$ = zip(
      this.cdp$,
      this.params$,
      this.liquidationPrice$,
    ).pipe(map(([cdp, params, price]) => getIssueLimit(cdp.cdp!, params, price)));
  }

  ngOnInit(): void { }
}
