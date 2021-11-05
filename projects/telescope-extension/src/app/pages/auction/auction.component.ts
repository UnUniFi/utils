import { CosmosSDKService } from '../../models/cosmos-sdk.service';
import { Component, OnInit } from '@angular/core';
import { botany, rest } from 'botany-client';
import { InlineResponse2002Params } from 'projects/botany-client/src/openapi';
import { combineLatest, Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  params$: Observable<InlineResponse2002Params>;
  constructor(private cosmosSDK: CosmosSDKService) {
    const timer$ = timer(0, 60 * 1000);

    this.params$ = combineLatest([this.cosmosSDK.sdk$, timer$]).pipe(
      mergeMap(([sdk, _]) => rest.botany.auction.params(sdk.rest)),
      map((res) => res.data.params!),
    );
  }

  ngOnInit(): void {}
}
