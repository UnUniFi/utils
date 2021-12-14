import { Component, Input, OnInit } from '@angular/core';
import { InlineResponse2002Params } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'view-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent implements OnInit {
  @Input()
  params?: InlineResponse2002Params | null;

  constructor() {}

  ngOnInit(): void {}
}
