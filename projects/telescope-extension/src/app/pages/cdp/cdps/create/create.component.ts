import { CdpApplicationService, CosmosSDKService } from '../../../../models/index';
import { Key } from '../../../../models/keys/key.model';
import { CreateCdpOnSubmitEvent } from '../../../../views/cdp/cdps/create/create.component';
import { Component, OnInit } from '@angular/core';
import { botany, rest } from 'botany-client';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  key$: Observable<Key | undefined>;
  cdpParams$: Observable<botany.cdp.IParams | undefined>;

  constructor(
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.cdpParams$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.botany.cdp.params(sdk.rest)),
      map((param) => param.data.params),
    );
  }

  ngOnInit(): void {}

  onSubmit($event: CreateCdpOnSubmitEvent) {
    this.cdpApplicationService.createCDP(
      $event.key,
      $event.privateKey,
      $event.collateral,
      $event.principal,
    );
  }
}
