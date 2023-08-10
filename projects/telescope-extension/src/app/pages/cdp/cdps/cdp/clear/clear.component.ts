import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cosmosclient, proto, rest as restCosmos } from '@cosmos-client/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { CdpApplicationService } from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { ClearCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/clear/clear.component';
import { timer, of, combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { rest, ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp1 } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css'],
})
export class ClearComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  params$: Observable<ununifi.cdp.IParams>;
  repaymentDenomString$: Observable<string>;
  repaymentDenom$: Observable<proto.cosmos.base.v1beta1.ICoin | undefined>;

  cdp$: Observable<InlineResponse2004Cdp1>;

  address$: Observable<cosmosclient.AccAddress | undefined>;
  balances$: Observable<proto.cosmos.base.v1beta1.ICoin[] | undefined>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];
  pollingInterval = 30;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSDK: CosmosSDKService,
    private readonly configS: ConfigService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.collateralType$ = this.route.params.pipe(map((params) => params['collateralType']));

    //get account balance information
    this.address$ = this.owner$.pipe(
      map((address) => {
        try {
          const accAddress = cosmosclient.AccAddress.fromString(address);
          return accAddress;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      }),
    );
    const timer$ = timer(0, this.pollingInterval * 1000);
    this.balances$ = combineLatest([timer$, this.cosmosSDK.sdk$, this.address$]).pipe(
      mergeMap(([n, sdk, address]) => {
        if (address === undefined) {
          return of([]);
        }
        return restCosmos.bank
          .allBalances(sdk.rest, address)
          .then((res) => res.data.balances || []);
      }),
    );

    this.params$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((data) => data.data.params!),
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

    this.repaymentDenomString$ = combineLatest([this.params$, this.cdp$]).pipe(
      map(([params, cdp]) =>
        params.debt_params?.find((debtParam) => debtParam.denom == cdp.cdp?.principal?.denom),
      ),
      map((res) => res?.denom!),
    );

    this.repaymentDenom$ = combineLatest([this.repaymentDenomString$, this.balances$]).pipe(
      map(([repaymentDenom, balances]) => {
        const repaymentDenomWithBalance = balances?.find(
          (balances) => balances.denom === repaymentDenom,
        );
        return repaymentDenomWithBalance;
      }),
    );
    this.minimumGasPrices = this.configS.config.minimumGasPrices;
  }

  ngOnInit(): void {
    this.collateralType$.subscribe((collateralType) => console.log(collateralType));
  }

  onSubmit($event: ClearCdpOnSubmitEvent) {
    this.cdpApplicationService.repayCDP(
      $event.key,
      $event.privateKey,
      $event.collateralType,
      $event.repayment,
      $event.minimumGasPrice,
      $event.balances,
    );
  }
}
