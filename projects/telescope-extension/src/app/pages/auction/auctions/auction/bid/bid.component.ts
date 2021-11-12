import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { botany, google, rest } from 'botany-client';
import { cosmosclient } from 'cosmos-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models';
import { AuctionApplicationService } from 'projects/telescope-extension/src/app/models/auctions/auction.application.service';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { PlaceBidOnSubmitEvent } from 'projects/telescope-extension/src/app/views/auction/auctions/auction/bid/bid.component';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent implements OnInit {
  key$: Observable<Key | undefined>;
  auctionID$: Observable<string>;
  auction$: Observable<botany.auction.CollateralAuction | undefined>;

  constructor(
    private route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private cosmosSDK: CosmosSDKService,
    private readonly auctionApplicationService: AuctionApplicationService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.auctionID$ = this.route.params.pipe(map((params) => params.auction_id));
    this.auction$ = combineLatest([this.cosmosSDK.sdk$, this.auctionID$]).pipe(
      mergeMap(([sdk, id]) =>
        rest.botany.auction.auction(sdk.rest, id).then((res) => res.data.auction),
      ),
      map((auction) => {
        const anyAuction = auction as {
          base_auction: { end_time: string; max_end_time: string };
        };
        const parseAuction = (anyAuction: any): unknown => {
          anyAuction.base_auction.end_time = google.protobuf.Timestamp.fromObject({
            seconds: Date.parse(anyAuction.base_auction.end_time),
            nanos: 0,
          });
          anyAuction.base_auction.max_end_time = google.protobuf.Timestamp.fromObject({
            seconds: Date.parse(anyAuction.base_auction.max_end_time),
            nanos: 0,
          });
          return anyAuction;
        };
        const unpackAuction = cosmosclient.codec.unpackCosmosAny(parseAuction(anyAuction));
        if (!(unpackAuction instanceof botany.auction.CollateralAuction)) {
          return;
        }
        return unpackAuction;
      }),
    );
  }

  ngOnInit(): void {}

  onSubmit($event: PlaceBidOnSubmitEvent) {
    this.auctionApplicationService.placeBid(
      $event.key,
      $event.privateKey,
      $event.auctionID,
      $event.amount,
    );
  }
}
