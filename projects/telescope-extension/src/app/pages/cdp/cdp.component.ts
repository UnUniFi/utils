import { CosmosSDKService } from '../../models/cosmos-sdk.service';
import { Component, OnInit } from '@angular/core';
import { botany, rest } from 'botany-client';
import { combineLatest, Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  params$: Observable<botany.cdp.IParams>;
  constructor(private cosmosSDK: CosmosSDKService) {
    const timer$ = timer(0, 60 * 1000);

    this.params$ = combineLatest([this.cosmosSDK.sdk$, timer$]).pipe(
      mergeMap(([sdk, _]) => rest.botany.cdp.params(sdk.rest)),
      map((res) => res.data.params!),
    );
  }

  ngOnInit(): void {}
}