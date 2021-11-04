import { Component, Input, OnInit } from '@angular/core';
import { botany } from 'botany-client';

@Component({
  selector: 'view-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  @Input()
  auction?: botany.auction.CollateralAuction | null;

  endTime?: Date | undefined;
  maxEndTime?: Date | undefined;

  constructor() {
    if (!this.auction?.base_auction?.end_time?.seconds?.toNumber()) {
      return;
    }
    this.endTime = new Date();
    this.endTime.setDate(this.auction?.base_auction?.end_time?.seconds?.toNumber());
    if (!this.auction?.base_auction?.max_end_time?.seconds?.toNumber()) {
      return;
    }
    this.maxEndTime = new Date();
    this.maxEndTime.setDate(this.auction?.base_auction?.max_end_time?.seconds?.toNumber());
  }

  ngOnInit(): void {}
}
