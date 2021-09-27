import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CdpApplicationService,
  KeyService,
} from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { DepositCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/deposit/deposit.component';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  keyID$: Observable<string>;
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  denom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyService: KeyService,
    private readonly cdpApplicationService: CdpApplicationService,
  ) {
    this.keyID$ = this.route.queryParams.pipe(map((params) => params['key_id']));
    this.key$ = this.keyID$.pipe(mergeMap((keyId: string) => this.keyService.get(keyId)));
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
  }

  ngOnInit(): void {}

  onSubmit($event: DepositCdpOnSubmitEvent) {
    this.cdpApplicationService.depositCDP(
      $event.key,
      $event.privateKey,
      $event.ownerAddr,
      $event.collateral,
    );
  }
}
