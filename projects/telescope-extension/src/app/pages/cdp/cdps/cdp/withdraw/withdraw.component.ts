import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rest, botany } from 'botany-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { CdpApplicationService } from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { WithdrawCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/withdraw/withdraw.component';
import { combineLatest, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  collateralType$: Observable<string>;
  params$: Observable<botany.cdp.IParams>;
  denom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cosmosSdk: CosmosSDKService,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
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
  }

  ngOnInit(): void {}

  onSubmit($event: WithdrawCdpOnSubmitEvent) {
    this.cdpApplicationService.withdrawCDP(
      $event.key,
      $event.privateKey,
      $event.ownerAddr,
      $event.collateralType,
      $event.collateral,
    );
  }
}
