import { Component, Input, OnInit } from '@angular/core';
import { ununifi } from 'ununifi-client';

@Component({
  selector: 'view-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  @Input()
  auction?: ununifi.auction.CollateralAuction | null;

  @Input()
  endTime?: Date | null;
  @Input()
  maxEndTime?: Date | null;

  constructor() {}

  ngOnInit(): void {}
}
