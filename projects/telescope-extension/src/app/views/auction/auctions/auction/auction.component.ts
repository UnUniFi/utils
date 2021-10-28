import { Component, Input, OnInit } from '@angular/core';
import { InlineResponse2001 } from 'botany-client/esm/openapi';

@Component({
  selector: 'view-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  @Input()
  auction?: InlineResponse2001 | null;

  constructor() {}

  ngOnInit(): void {}
}
