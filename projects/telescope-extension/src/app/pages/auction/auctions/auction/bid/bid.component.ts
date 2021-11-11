import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionApplicationService } from 'projects/telescope-extension/src/app/models/auctions/auction.application.service';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { KeyStoreService } from 'projects/telescope-extension/src/app/models/keys/key.store.service';
import { PlaceBidOnSubmitEvent } from 'projects/telescope-extension/src/app/views/auction/auctions/auction/bid/bid.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent implements OnInit {
  key$: Observable<Key | undefined>;
  auctionID$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private readonly keyStore: KeyStoreService,
    private readonly auctionApplicationService: AuctionApplicationService,
  ) {
    this.key$ = this.keyStore.currentKey$.asObservable();
    this.auctionID$ = this.route.params.pipe(map((params) => params.auction_id));
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
