import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rest } from 'botany-client';
import {
  CdpApplicationService,
  CosmosSDKService,
  KeyService,
} from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { ClearCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/clear/clear.component';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css'],
})
export class ClearComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  denom$: Observable<string>;
  paymentDenom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
    this.paymentDenom$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.botany.cdp.params(sdk.rest)),
      map((param) => param.data.params?.debt_param?.denom || ''),
    );
  }

  ngOnInit(): void {}

  onSubmit($event: ClearCdpOnSubmitEvent) {
    this.cdpApplicationService.repayCDP(
      $event.key,
      $event.privateKey,
      $event.denom,
      $event.payment,
    );
  }
}
