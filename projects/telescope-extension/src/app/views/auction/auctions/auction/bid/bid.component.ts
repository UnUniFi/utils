import { Component, Input, OnInit } from '@angular/core';
import { botany } from 'botany-client';

@Component({
  selector: 'view-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent implements OnInit {
  @Input()
  auction?: botany.auction.CollateralAuction | null;

  @Input()
  endTime?: Date | null;
  @Input()
  maxEndTime?: Date | null;

  constructor() {}

  ngOnInit(): void {}
}
