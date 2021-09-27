import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdpApplicationService } from 'projects/telescope-extension/src/app/models/index';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { WithdrawCdpOnSubmitEvent } from 'projects/telescope-extension/src/app/views/cdp/cdps/cdp/withdraw/withdraw.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  key$: Observable<Key | undefined>;
  owner$: Observable<string>;
  denom$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly cdpApplicationService: CdpApplicationService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.owner$ = this.route.params.pipe(map((params) => params['owner']));
    this.denom$ = this.route.params.pipe(map((params) => params['denom']));
  }

  ngOnInit(): void {}

  onSubmit($event: WithdrawCdpOnSubmitEvent) {
    this.cdpApplicationService.withdrawCDP(
      $event.key,
      $event.privateKey,
      $event.ownerAddr,
      $event.collateral,
    );
  }
}
