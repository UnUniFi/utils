import { CdpApplicationService, CosmosSDKService } from '../../../../models/index';
import { Key } from '../../../../models/keys/key.model';
import { CreateCdpOnSubmitEvent } from '../../../../views/cdp/cdps/create/create.component';
import { Component, OnInit } from '@angular/core';
import { proto } from '@cosmos-client/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { combineLatest, Observable, Subject } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ununifi, rest } from 'ununifi-client';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  key$: Observable<Key | undefined>;
  cdpParams$: Observable<ununifi.cdp.IParams | undefined>;
  collateralParams$: Observable<ununifi.cdp.ICollateralParam[] | null | undefined>;
  selectedCollateralTypeSubject: Subject<string | null | undefined>;
  selectedCollateralType$: Observable<string | null | undefined>;
  selectedCollateralParam$: Observable<ununifi.cdp.ICollateralParam | null | undefined>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];

  constructor(
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
    private readonly configS: ConfigService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.cdpParams$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((param) => param.data.params),
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
    );
  }

  onSelectedCollateralTypeChanged(collateralType: string): void {
    this.selectedCollateralTypeSubject.next(collateralType);
  }
}
