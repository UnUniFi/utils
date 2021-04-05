import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {
  CdpApplicationService,
  CosmosSDKService,
  KeyService,
} from '../../../../model/index';
import { Key } from '@model-ce/keys/key.model';
import { CreateCdpOnSubmitEvent } from '@view-ce/cdp/cdps/create/create.component';
import { botany, rest } from 'botany-client';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  keyID$: Observable<string>;
  key$: Observable<Key | undefined>;
  cdpParams$: Observable<botany.cdp.IParams | undefined>;

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
    this.cdpParams$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => rest.botany.cdp.params(sdk.rest)),
      map((param) => param.data.params),
    );
  }

  ngOnInit(): void { }

  onSubmit($event: CreateCdpOnSubmitEvent) {
    this.cdpApplicationService.createCDP(
      $event.key,
      $event.privateKey,
      $event.collateral,
      $event.principal,
    );
  }
}