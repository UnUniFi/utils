import { getWithdrawLimit, getIssueLimit } from '../../../../utils/function';
import { getSpotPriceStream, getLiquidationPriceStream } from '../../../../utils/stream';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rest, botany } from 'botany-client';
import { InlineResponse2004Cdp1, InlineResponse2006Deposits } from 'botany-client/esm/openapi';
import { cosmosclient } from 'cosmos-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { combineLatest, from, Observable, pipe, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  owner$: Observable<string>;
  collateralType$: Observable<string>;
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
    this.collateralType$ = this.route.params.pipe(map((params) => params['collateralType']));
    this.params$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.botany.cdp.params(sdk.rest)),
      map((data) => data.data.params!),
    );
    this.denom$ = combineLatest([this.collateralType$, this.params$]).pipe(
      map(([collateralType, params]) => {
        const matchedDenoms = params.collateral_params?.filter(
          (param) => param.type === collateralType,
        );
        return matchedDenoms ? (matchedDenoms[0].denom ? matchedDenoms[0].denom : '') : '';
      }),
    );
    const ownerAndCollateralType$ = combineLatest([
      this.owner$,
      this.collateralType$,
      this.cosmosSdk.sdk$,
    ]);

    this.cdp$ = ownerAndCollateralType$.pipe(
      mergeMap(([ownerAddr, collateralType, sdk]) =>
        rest.botany.cdp.cdp(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          collateralType,
        ),
      ),
      map((res) => res.data.cdp!),
    );

    this.deposits$ = ownerAndCollateralType$.pipe(
      mergeMap(([ownerAddr, collateralType, sdk]) =>
        rest.botany.cdp.allDeposits(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          collateralType,
        ),
      ),
      map((res) => res.data.deposits || []),
    );

    this.spotPrice$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => getSpotPriceStream(sdk.rest, this.collateralType$, this.params$)),
    );

    this.liquidationPrice$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => getLiquidationPriceStream(sdk.rest, this.collateralType$, this.params$)),
    );

    this.withdrawLimit$ = zip(this.cdp$, this.params$, this.spotPrice$).pipe(
      map(([cdp, params, price]) => getWithdrawLimit(cdp.cdp!, params, price)),
    );

    this.issueLimit$ = zip(this.cdp$, this.params$, this.liquidationPrice$).pipe(
      map(([cdp, params, price]) => getIssueLimit(cdp.cdp!, params, price)),
    );
  }

  ngOnInit(): void {}
}
