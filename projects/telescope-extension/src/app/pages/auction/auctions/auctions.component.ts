import { ConfigService } from '../../../models/config.service';
import { CosmosSDKService, KeyService } from '../../../models/index';
import { Key } from '../../../models/keys/key.model';
import { KeyStoreService } from '../../../models/keys/key.store.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { rest } from 'botany-client';
import { cosmosclient } from 'cosmos-client';
import { InlineResponse200Auctions } from 'projects/botany-client/src/openapi';
import { BehaviorSubject, combineLatest, Observable, of, timer } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';

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
  auctions$?: Observable<InlineResponse200Auctions[] | undefined>;

  constructor(
    private route: ActivatedRoute,
    private cosmosSDK: CosmosSDKService,
    private configService: ConfigService,
    private readonly key: KeyService,
    private readonly keyStore: KeyStoreService,
  ) {
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
        const modifiedPageOffset = pageOffset < 1 ? BigInt(1) : pageOffset;
        const modifiedPageSize = pageOffset < 1 ? pageOffset + BigInt(pageSize) : BigInt(pageSize);

        if (modifiedPageOffset <= 0 || modifiedPageSize <= 0) {
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
      map((latestauctions) => latestauctions?.reverse()),
    );
  }

  ngOnInit(): void {}

  appPaginationChanged(pageEvent: PageEvent): void {
    this.pageSize$.next(pageEvent.pageSize);
    this.pageNumber$.next(pageEvent.pageIndex + 1);
  }
}
