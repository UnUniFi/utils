import { getWithdrawLimit, getIssueLimit } from '../../../../utils/function';
import { getSpotPriceStream, getLiquidationPriceStream } from '../../../../utils/stream';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cosmosclient } from '@cosmos-client/core';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { combineLatest, Observable, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { rest, ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp1, InlineResponse2006Deposits } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  denom$: Observable<string>;
  params$: Observable<ununifi.cdp.IParams>;
  cdp$: Observable<InlineResponse2004Cdp1>;
  deposits$: Observable<InlineResponse2006Deposits[]>;

  spotPrice$: Observable<ununifi.pricefeed.ICurrentPrice>;
  liquidationPrice$: Observable<ununifi.pricefeed.ICurrentPrice>;
  withdrawLimit$: Observable<number>;
  issueLimit$: Observable<number>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.collateralType$ = this.route.params.pipe(map((params) => params['collateralType']));
    this.params$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
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
        rest.ununifi.cdp.cdp(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          collateralType,
        ),
      ),
      map((res) => res.data.cdp!),
    );

    this.deposits$ = ownerAndCollateralType$.pipe(
      mergeMap(([ownerAddr, collateralType, sdk]) =>
        rest.ununifi.cdp
          .allDeposits(sdk.rest, cosmosclient.AccAddress.fromString(ownerAddr), collateralType)
          .catch((error) => {
            console.error(error);
            return undefined;
          }),
      ),
      map((res) => res?.data.deposits || []),
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
