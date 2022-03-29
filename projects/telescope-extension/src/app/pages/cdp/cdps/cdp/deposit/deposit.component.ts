import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cosmosclient, proto, rest as restCosmos } from '@cosmos-client/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { CdpApplicationService } from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { DepositCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/deposit/deposit.component';
import { of, combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { rest, ununifi } from 'ununifi-client';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  params$: Observable<ununifi.cdp.IParams>;
  denom$: Observable<proto.cosmos.base.v1beta1.ICoin | undefined>;
  address$: Observable<cosmosclient.AccAddress | undefined>;
  balances$: Observable<proto.cosmos.base.v1beta1.ICoin[] | undefined>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cosmosSDK: CosmosSDKService,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly configS: ConfigService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.collateralType$ = this.route.params.pipe(map((params) => params['collateralType']));
    this.params$ = this.cosmosSDK.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((data) => data.data.params!),
    );

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

    this.denom$ = combineLatest([this.collateralType$, this.params$, this.balances$]).pipe(
      map(([collateralType, params, balances]) => {
        const matchedDenoms = params.collateral_params?.filter(
          (param) => param.type === collateralType,
        );
        const collateralDenom = matchedDenoms
          ? matchedDenoms[0].denom
            ? matchedDenoms[0].denom
            : ''
          : '';
        const collateralDenomWithBalance = balances?.find(
          (balances) => balances.denom === collateralDenom,
        );

        return collateralDenomWithBalance;
      }),
    );
    this.minimumGasPrices = this.configS.config.minimumGasPrices;
  }

  ngOnInit(): void {}

  onSubmit($event: DepositCdpOnSubmitEvent) {
    this.cdpApplicationService.depositCDP(
      $event.key,
      $event.privateKey,
      $event.ownerAddr,
      $event.collateralType,
      $event.collateral,
      $event.minimumGasPrice,
      $event.balances,
    );
  }
}
