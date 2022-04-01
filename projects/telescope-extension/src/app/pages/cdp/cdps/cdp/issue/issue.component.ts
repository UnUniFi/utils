import { getIssueLimit } from '../../../../../utils/function';
import { getLiquidationPriceStream } from '../../../../../utils/stream';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { cosmosclient, proto, rest as restCosmos } from '@cosmos-client/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { CdpApplicationService } from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { IssueCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/issue/issue.component';
import { of, zip, combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { rest, ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp1 } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  params$: Observable<ununifi.cdp.IParams>;
  principalDenom$: Observable<string>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];

  cdp$: Observable<InlineResponse2004Cdp1>;
  liquidationPrice$: Observable<ununifi.pricefeed.ICurrentPrice>;
  issueLimit$: Observable<number>;

  address$: Observable<cosmosclient.AccAddress | undefined>;
  balances$: Observable<proto.cosmos.base.v1beta1.ICoin[] | undefined>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSDK: CosmosSDKService,
    private readonly configS: ConfigService,
    private readonly snackBar: MatSnackBar,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.collateralType$ = this.route.params.pipe(map((params) => params['collateralType']));
    this.params$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((data) => data.data.params!),
    );
    this.principalDenom$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((res) => res.data.params?.debt_param?.denom || ''),
    );

    //get account balance information
    this.address$ = this.owner$.pipe(
      map((address) => {
        try {
          const accAddress = cosmosclient.AccAddress.fromString(address);
          return accAddress;
        } catch (error) {
          console.error(error);
          this.snackBar.open('Invalid address!', 'close');
          return undefined;
        }
      }),
    );
    this.balances$ = combineLatest([this.cosmosSDK.sdk$, this.address$]).pipe(
      mergeMap(([sdk, address]) => {
        if (address === undefined) {
          return of([]);
        }
        return restCosmos.bank
          .allBalances(sdk.rest, address)
          .then((res) => res.data.balances || []);
      }),
    );

    this.cdp$ = combineLatest([this.owner$, this.collateralType$, this.cosmosSDK.sdk$]).pipe(
      mergeMap(([ownerAddr, collateralType, sdk]) =>
        rest.ununifi.cdp.cdp(
          sdk.rest,
          cosmosclient.AccAddress.fromString(ownerAddr),
          collateralType,
        ),
      ),
      map((res) => res.data.cdp!),
    );

    this.liquidationPrice$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => getLiquidationPriceStream(sdk.rest, this.collateralType$, this.params$)),
    );

    this.issueLimit$ = zip(this.cdp$, this.params$, this.liquidationPrice$).pipe(
      map(([cdp, params, price]) => getIssueLimit(cdp.cdp!, params, price)),
    );

    this.minimumGasPrices = this.configS.config.minimumGasPrices;
  }

  ngOnInit(): void {}

  onSubmit($event: IssueCdpOnSubmitEvent) {
    this.cdpApplicationService.drawCDP(
      $event.key,
      $event.privateKey,
      $event.collateralType,
      $event.principal,
      $event.minimumGasPrice,
      $event.balances,
    );
  }
}
