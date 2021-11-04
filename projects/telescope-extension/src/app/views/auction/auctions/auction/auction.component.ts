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
    this.endTime = new Date();
    if (this.auction?.base_auction?.end_time?.seconds?.toNumber() != undefined) {
      this.endTime.setDate(this.auction?.base_auction?.end_time?.seconds?.toNumber());
    }
    this.maxEndTime = new Date();
    if (this.auction?.base_auction?.max_end_time?.seconds?.toNumber() != undefined) {
      this.endTime.setDate(this.auction?.base_auction?.max_end_time?.seconds?.toNumber());
    }
  }

  ngOnInit(): void {}
}
