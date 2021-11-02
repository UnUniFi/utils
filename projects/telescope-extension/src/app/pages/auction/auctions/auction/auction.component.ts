import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { botany, rest } from 'botany-client';
import { cosmosclient } from 'cosmos-client';
import { auction } from 'projects/botany-client/src/rest/botany/auction';
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

  constructor(private route: ActivatedRoute, private cosmosSDK: CosmosSDKService) {
    this.auctionID$ = this.route.params.pipe(map((params) => params.auction_id));
    this.auction$ = combineLatest([this.cosmosSDK.sdk$, this.auctionID$]).pipe(
      mergeMap(([sdk, id]) =>
        rest.botany.auction.auction(sdk.rest, id).then((res) => res.data.auction),
      ),
      map((auction) => {
        console.log(auction);
        const unpackAuction = cosmosclient.codec.unpackCosmosAny(auction);
        if (!(unpackAuction instanceof botany.auction.CollateralAuction)) {
          console.log(unpackAuction);
          return;
        }
        return unpackAuction;
      }),
    );
    this.auction$?.subscribe((auction) => console.log(auction));
  }

  ngOnInit(): void {}
}
