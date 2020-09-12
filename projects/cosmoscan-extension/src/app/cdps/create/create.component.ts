import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { CdpService, KeyService } from '../../../model/index';
import { Key } from '@model-ce/keys/key.model';
import { CreateCdpOnSubmitEvent } from '@view-ce/cdps/create/create.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  keyID$: Observable<string>;
  key$: Observable<Key | undefined>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyService: KeyService,
    private readonly cdpService: CdpService,
  ) {
    this.keyID$ = this.route.queryParams.pipe(
      map((params) => params['key_id']),
    );
    this.key$ = this.keyID$.pipe(
      mergeMap((keyId: string) => this.keyService.get(keyId)),
    );
  }

  ngOnInit(): void {}

  async onSubmit($event: CreateCdpOnSubmitEvent) {
    //todo: move this call to application service
    this.cdpService.createCDP(
      $event.key,
      $event.privateKey,
      $event.collateral,
      $event.principal,
    );
  }
}
