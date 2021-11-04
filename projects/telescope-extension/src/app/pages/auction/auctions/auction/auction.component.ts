import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { botany, google, rest } from 'botany-client';
import { cosmosclient } from 'cosmos-client';
import { CosmosSDKService } from 'projects/telescope-extension/src/app/models/index';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  auctionID$: Observable<string>;
  auction$: Observable<botany.auction.CollateralAuction | undefined>;
  endTime$: Observable<Date | undefined>;
  maxEndTime$: Observable<Date | undefined>;

  constructor(private route: ActivatedRoute, private cosmosSDK: CosmosSDKService) {
    this.auctionID$ = this.route.params.pipe(map((params) => params.auction_id));
    this.auction$ = combineLatest([this.cosmosSDK.sdk$, this.auctionID$]).pipe(
      mergeMap(([sdk, id]) =>
        rest.botany.auction.auction(sdk.rest, id).then((res) => res.data.auction),
      ),
      map((auction) => {
        const data = auction as { base_auction: { end_time: string; max_end_time: string } };
        const parseAuction = (value: any): unknown => {
          value.base_auction.end_time = google.protobuf.Timestamp.fromObject({
            seconds: Date.parse(value.base_auction.end_time),
            nanos: 0,
          });
          value.base_auction.max_end_time = google.protobuf.Timestamp.fromObject({
            seconds: Date.parse(value.base_auction.max_end_time),
            nanos: 0,
          });
          return value;
        };
        const unpackAuction = cosmosclient.codec.unpackCosmosAny(parseAuction(data));
        if (!(unpackAuction instanceof botany.auction.CollateralAuction)) {
          return;
        }
        return unpackAuction;
      }),
    );
    this.endTime$ = this.auction$.pipe(
      map((value) => {
        if (!Number(value?.base_auction?.end_time?.seconds)) {
          console.log(value?.base_auction?.end_time?.seconds);
          return;
        }
        const endTime = new Date();
        endTime.setTime(Number(value?.base_auction?.end_time?.seconds));
        return endTime;
      }),
    );
    this.maxEndTime$ = this.auction$.pipe(
      map((value) => {
        if (!Number(value?.base_auction?.end_time?.seconds)) {
          console.log(value?.base_auction?.max_end_time?.seconds);
          return;
        }
        const maxEndTime = new Date();
        maxEndTime.setTime(Number(value?.base_auction?.max_end_time?.seconds));
        return maxEndTime;
      }),
    );
  }

  ngOnInit(): void {}
}
