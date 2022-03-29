import { CdpApplicationService, CosmosSDKService } from '../../../../models/index';
import { Key } from '../../../../models/keys/key.model';
import { KeyService } from '../../../../models/keys/key.service';
import { getCreateLimit } from '../../../../utils/function';
import { getLiquidationPriceStream } from '../../../../utils/stream';
import { CreateCdpOnSubmitEvent } from '../../../../views/cdp/cdps/create/create.component';
import { Component, OnInit } from '@angular/core';
import { cosmosclient, proto, rest as restCosmos } from '@cosmos-client/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { of, combineLatest, BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ununifi, rest } from 'ununifi-client';
import { InlineResponse2004Cdp1 } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  key$: Observable<Key | undefined>;
  cdpParams$: Observable<ununifi.cdp.IParams>;
  collateralParams$: Observable<ununifi.cdp.ICollateralParam[] | null | undefined>;
  selectedCollateralTypeSubject: Subject<string | null | undefined>;
  selectedCollateralType$: Observable<string | null | undefined>;
  selectedCollateralParam$: Observable<ununifi.cdp.ICollateralParam | null | undefined>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];

  address$: Observable<cosmosclient.AccAddress>;
  balances$: Observable<proto.cosmos.base.v1beta1.ICoin[] | undefined>;

  collateralType$: Observable<string>;
  collateralLimit$: Observable<number>;

  collateralInputValue: BehaviorSubject<number> = new BehaviorSubject(0);
  LiquidationPrice$: Observable<ununifi.pricefeed.ICurrentPrice>;
  principalLimit$: Observable<number>;

  cdp$: Observable<InlineResponse2004Cdp1 | undefined>;

  constructor(
    private readonly key: KeyService,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSDK: CosmosSDKService,
    private readonly configS: ConfigService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.cdpParams$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((param) => param.data.params!),
    );
    this.collateralParams$ = this.cdpParams$.pipe(map((cdpParams) => cdpParams?.collateral_params));
    this.selectedCollateralTypeSubject = new Subject();
    this.collateralParams$.subscribe((collateralParams) => {
      if (collateralParams === undefined || collateralParams === null) {
        this.selectedCollateralTypeSubject.next(undefined);
        return;
      }
      this.selectedCollateralTypeSubject.next(collateralParams[0].type);
    });
    this.selectedCollateralType$ = this.selectedCollateralTypeSubject.asObservable();
    this.selectedCollateralParam$ = combineLatest([
      this.collateralParams$,
      this.selectedCollateralType$,
    ]).pipe(
      map(([collateralParams, selectedCollateralType]) => {
        if (
          collateralParams === undefined ||
          collateralParams === null ||
          selectedCollateralType === undefined ||
          selectedCollateralType === null
        ) {
          return undefined;
        }
        return collateralParams.filter(
          (collateralParam) => collateralParam.type === selectedCollateralType,
        )[0];
      }),
    );

    //get account balance information
    this.address$ = this.key$.pipe(
      filter((key): key is Key => key !== undefined),
      map((key) =>
        cosmosclient.AccAddress.fromPublicKey(this.key.getPubKey(key!.type, key.public_key)),
      ),
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

    // get collateral limit
    this.collateralLimit$ = combineLatest([this.balances$, this.selectedCollateralParam$]).pipe(
      map(([balances, CollateralParam]) => {
        if (!CollateralParam) {
          return 0;
        }
        if (!balances) {
          return 0;
        }
        const collateralDenomLimit = balances.find(
          (balance) => balance.denom === CollateralParam.denom,
        )?.amount;
        return Number(collateralDenomLimit);
      }),
    );

    // get principal limit
    this.collateralType$ = this.selectedCollateralType$.pipe(map((type) => (type ? type : '')));
    this.LiquidationPrice$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => getLiquidationPriceStream(sdk.rest, this.collateralType$, this.cdpParams$)),
    );
    this.principalLimit$ = combineLatest([
      this.collateralType$,
      this.cdpParams$,
      this.LiquidationPrice$,
      this.collateralInputValue.asObservable(),
    ]).pipe(
      map(([collateralType, params, liquidationPrice, collateralAmount]) => {
        return getCreateLimit(collateralAmount, collateralType, params, liquidationPrice);
      }),
    );

    // check cdp
    this.cdp$ = combineLatest([this.address$, this.collateralType$, this.cosmosSDK.sdk$]).pipe(
      mergeMap(([ownerAddr, collateralType, sdk]) =>
        rest.ununifi.cdp.cdp(sdk.rest, ownerAddr, collateralType),
      ),
      map((res) => res.data.cdp),
    );

    this.minimumGasPrices = this.configS.config.minimumGasPrices;
  }

  ngOnInit(): void {}

  onSubmit($event: CreateCdpOnSubmitEvent) {
    this.cdpApplicationService.createCDP(
      $event.key,
      $event.privateKey,
      $event.collateralType,
      $event.collateral,
      $event.principal,
      $event.minimumGasPrice,
      $event.balances,
    );
  }

  onSelectedCollateralTypeChanged(collateralType: string): void {
    this.selectedCollateralTypeSubject.next(collateralType);
  }

  onCollateralAmountChanged(amount: number): void {
    this.collateralInputValue.next(amount);
  }
}
