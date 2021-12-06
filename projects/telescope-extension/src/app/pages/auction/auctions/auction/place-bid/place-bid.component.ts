import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cosmosclient } from '@cosmos-client/core';
import { botany, google, rest } from 'botany-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models';
import { AuctionApplicationService } from 'projects/telescope-extension/src/app/models/auctions/auction.application.service';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { PlaceBidOnSubmitEvent } from 'projects/telescope-extension/src/app/views/auction/auctions/auction/place-bid/place-bid.component';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css'],
})
export class PlaceBidComponent implements OnInit {
  key$: Observable<Key | undefined>;
  auctionID$: Observable<string>;
  auction$: Observable<botany.auction.CollateralAuction | undefined>;
  endTime$: Observable<Date | undefined>;
  maxEndTime$: Observable<Date | undefined>;

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
    this.endTime$ = this.auction$.pipe(
      map((auction) => {
        if (!Number(auction?.base_auction?.end_time?.seconds)) {
          console.log(auction?.base_auction?.end_time?.seconds);
          return;
        }
        const endTime = new Date();
        endTime.setTime(Number(auction?.base_auction?.end_time?.seconds));
        return endTime;
      }),
    );
    this.maxEndTime$ = this.auction$.pipe(
      map((auction) => {
        if (!Number(auction?.base_auction?.end_time?.seconds)) {
          console.log(auction?.base_auction?.max_end_time?.seconds);
          return;
        }
        const maxEndTime = new Date();
        maxEndTime.setTime(Number(auction?.base_auction?.max_end_time?.seconds));
        return maxEndTime;
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
