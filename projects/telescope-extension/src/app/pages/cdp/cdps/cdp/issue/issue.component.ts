import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rest } from 'botany-client';
import {
  CdpApplicationService,
  CosmosSDKService,
} from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { IssueCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/issue/issue.component';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  denom$: Observable<string>;
  principalDenom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
    this.principalDenom$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.botany.cdp.params(sdk.rest)),
      map((res) => res.data.params?.debt_param?.denom || ''),
    );
  }

  ngOnInit(): void {}

  onSubmit($event: IssueCdpOnSubmitEvent) {
    this.cdpApplicationService.drawCDP(
      $event.key,
      $event.privateKey,
      $event.denom,
      $event.principal,
    );
  }
}
