import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { proto } from 'cosmos-client';
import { InlineResponse2002Params } from 'projects/botany-client/src/openapi';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type PlaceBidOnSubmitEvent = {
  key: Key;
  privateKey: string;
  auctionID: string;
  amount: proto.cosmos.base.v1beta1.ICoin;
};

@Component({
  selector: 'view-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  auctionID?: string | null;

  @Output()
  appSubmit: EventEmitter<PlaceBidOnSubmitEvent>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(privateKey: string, Denom: string, Amount: string) {
    if (!this.auctionID) {
      console.error(this.auctionID);
      return;
    }
    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      auctionID: this.auctionID,
      amount: {
        denom: Denom,
        amount: Amount,
      },
    });
  }
}
