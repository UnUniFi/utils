import { Component, Input, OnInit } from '@angular/core';
import {
  CDP,
  CdpParameters,
  Deposit,
} from 'projects/cosmoscan-extension/src/x/cdp/api';
import { Price } from 'projects/cosmoscan-extension/src/x/pricefeed/api';

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
  params?: CdpParameters | null;

  @Input()
  cdp?: CDP | null;

  @Input()
  deposits?: Deposit[] | null;

  @Input()
  spotPrice?: Price | null;

  @Input()
  liquidationPrice?: Price | null;

  @Input()
  withdrawLimit?: number | null;

  @Input()
  issueLimit?: number | null;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('params', this.params);
      console.log('cdp', this.cdp);
      console.log('deposits', this.deposits);
    }, 10000);
  }
}
