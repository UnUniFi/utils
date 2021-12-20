import { Component, Input, OnInit } from '@angular/core';
import { ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp1, InlineResponse2006Deposits } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  owner?: string | null;

  @Input()
  collateralType?: string | null;

  @Input()
  denom?: string | null;

  @Input()
  params?: ununifi.cdp.IParams | null;

  @Input()
  cdp?: InlineResponse2004Cdp1 | null;

  @Input()
  deposits?: InlineResponse2006Deposits[] | null;

  @Input()
  spotPrice?: ununifi.pricefeed.ICurrentPrice | null;

  @Input()
  liquidationPrice?: ununifi.pricefeed.ICurrentPrice | null;

  @Input()
  withdrawLimit?: number | null;

  @Input()
  issueLimit?: number | null;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.owner);
      console.log(this.collateralType);
      console.log(this.denom);
      console.log(this.params);
      console.log(this.cdp);
      console.log(this.deposits);
      console.log(this.spotPrice);
      console.log(this.liquidationPrice);
      console.log(this.withdrawLimit);
      console.log(this.issueLimit);
    }, 10000);
  }
}
