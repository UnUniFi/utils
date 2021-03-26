import { Component, Input, OnInit } from '@angular/core';
import { botany } from 'botany-client';
import { InlineResponse2004Cdp1, InlineResponse2006Deposits } from 'botany-client/openapi-eurx';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  owner?: string | null;

  @Input()
  denom?: string | null;

  @Input()
  params?: botany.cdp.IParams | null;

  @Input()
  cdp?: InlineResponse2004Cdp1 | null;

  @Input()
  deposits?: InlineResponse2006Deposits[] | null;

  @Input()
  spotPrice?: botany.pricefeed.ICurrentPrice | null;

  @Input()
  liquidationPrice?: botany.pricefeed.ICurrentPrice | null;

  @Input()
  withdrawLimit?: number | null;

  @Input()
  issueLimit?: number | null;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('params', this.params);
      console.log('cdp', this.cdp);
      console.log('deposits', this.deposits);
    }, 10000);
  }
}
