import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CdpApplicationService,
  CosmosSDKService,
  KeyService,
} from '@model-ce/index';
import { Key } from '@model-ce/keys/key.model';
import { IssueCdpOnSubmitEvent } from '@view-ce/cdp/cdps/cdp/issue/issue.component';
import { rest } from 'botany-client'
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  keyID$: Observable<string>;
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  denom$: Observable<string>;
  principalDenom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyService: KeyService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.keyID$ = this.route.queryParams.pipe(
      map((params) => params['key_id']),
    );
    this.key$ = this.keyID$.pipe(
      mergeMap((keyId: string) => this.keyService.get(keyId)),
    );
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
    this.principalDenom$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => rest.botany.cdp.params(sdk.rest)),
      map((res) => res.data.params?.debt_param?.denom || ''),
    );
  }

  ngOnInit(): void { }

  onSubmit($event: IssueCdpOnSubmitEvent) {
    this.cdpApplicationService.drawCDP(
      $event.key,
      $event.privateKey,
      $event.denom,
      $event.principal,
    );
  }
}
