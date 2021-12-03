import { CosmosSDKService } from '../../../models/index';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cosmosclient } from '@cosmos-client/core';
import { rest, botany, google } from 'botany-client';
import { BehaviorSubject, combineLatest, Observable, of, timer } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
  pageSizeOptions = [5, 10, 20, 50, 100];
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(10);
  pageNumber$: BehaviorSubject<number> = new BehaviorSubject(1);
  pageLength$: BehaviorSubject<number> = new BehaviorSubject(0);

  auctionsTotalCount$: Observable<bigint>;
  auctionsPageOffset$: Observable<bigint>;

  pollingInterval = 30;
  auctions$?: Observable<(botany.auction.CollateralAuction | undefined)[] | undefined>;

  constructor(private cosmosSDK: CosmosSDKService) {
    const timer$ = timer(0, this.pollingInterval * 1000);
    const sdk$ = timer$.pipe(mergeMap((_) => this.cosmosSDK.sdk$));

    this.auctionsTotalCount$ = combineLatest([sdk$, this.pageNumber$, this.pageSize$]).pipe(
      switchMap(([sdk, _pageNumber, _pageSize]) => {
        return rest.botany.auction
          .allAuctions(sdk.rest, undefined, undefined, undefined, true)
          .then((res) =>
            res.data.pagination?.total ? BigInt(res.data.pagination?.total) : BigInt(0),
          )
          .catch((error) => {
            console.error(error);
            return BigInt(0);
          });
      }),
    );

    this.auctionsTotalCount$.subscribe((auctionsTotalCount) => {
      this.pageLength$.next(parseInt(auctionsTotalCount.toString()));
    });

    this.auctionsPageOffset$ = combineLatest([
      this.pageNumber$,
      this.pageSize$,
      this.auctionsTotalCount$,
    ]).pipe(
      map(([pageNumber, pageSize, auctionsTotalCount]) => {
        const pageOffset = auctionsTotalCount - BigInt(pageSize) * BigInt(pageNumber);
        return pageOffset;
      }),
    );

    this.auctions$ = combineLatest([
      sdk$,
      this.pageSize$.asObservable(),
      this.auctionsPageOffset$,
      this.auctionsTotalCount$,
    ]).pipe(
      filter(
        ([_sdk, _pageSize, _pageOffset, auctionTotalCount]) => auctionTotalCount !== BigInt(0),
      ),
      switchMap(([sdk, pageSize, pageOffset, _auctionTotalCount]) => {
        const modifiedPageOffset = pageOffset < 0 ? BigInt(0) : pageOffset;
        const modifiedPageSize = pageOffset < 0 ? pageOffset + BigInt(pageSize) : BigInt(pageSize);

        if (modifiedPageOffset < 0 || modifiedPageSize < 0) {
          return [];
        }

        return rest.botany.auction
          .allAuctions(sdk.rest, undefined, modifiedPageOffset, modifiedPageSize, true)
          .then((res) => {
            return res.data.auctions;
          })
          .catch((error) => {
            console.error(error);
            return [];
          });
      }),
      map((latestAuctions) => {
        const unpackAuction = latestAuctions?.map((auction) => {
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
          const unpackValue = cosmosclient.codec.unpackCosmosAny(parseAuction(anyAuction));
          if (!(unpackValue instanceof botany.auction.CollateralAuction)) {
            console.log(unpackValue);
            return;
          }
          return unpackValue;
        });
        return unpackAuction?.reverse();
      }),
    );
  }

  ngOnInit(): void {}

  appPaginationChanged(pageEvent: PageEvent): void {
    this.pageSize$.next(pageEvent.pageSize);
    this.pageNumber$.next(pageEvent.pageIndex + 1);
  }
}
