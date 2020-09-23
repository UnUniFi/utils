import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CdpApplicationService,
  CosmosSDKService,
  KeyService,
} from '@model-ce/index';
import { Key } from '@model-ce/keys/key.model';
import { IssueCdpOnSubmitEvent } from '@view-ce/cdps/cdp/issue/issue.component';
import { cdpParametersGet } from 'projects/cosmoscan-extension/src/x/cdp/module';
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
    this.principalDenom$ = from(cdpParametersGet(this.cosmosSdk.sdk)).pipe(
      map((param) => param.result.debt_param.denom),
    );
  }

  ngOnInit(): void {}

  onSubmit($event: IssueCdpOnSubmitEvent) {
    this.cdpApplicationService.drawCDP(
      $event.key,
      $event.privateKey,
      $event.ownerAddr,
      $event.denom,
      $event.principal,
    );
  }
}
