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

  @Input()
  endTime?: Date | null;
  @Input()
  maxEndTime?: Date | null;

  constructor() {}

  ngOnInit(): void {}
}
