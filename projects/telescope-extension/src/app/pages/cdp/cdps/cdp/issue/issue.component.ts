import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { proto } from '@cosmos-client/core';
import { rest, botany } from 'botany-client';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import {
  CdpApplicationService,
  CosmosSDKService,
} from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { IssueCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/issue/issue.component';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  params$: Observable<botany.cdp.IParams>;
  denom$: Observable<string>;
  principalDenom$: Observable<string>;
  minimumGasPrices: proto.cosmos.base.v1beta1.ICoin[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
    private readonly configS: ConfigService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
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
    this.principalDenom$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.botany.cdp.params(sdk.rest)),
      map((res) => res.data.params?.debt_param?.denom || ''),
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
    );
  }
}
