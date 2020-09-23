import { Component, Input, OnInit } from '@angular/core';
import { Deposit } from 'cosmos-client/api';
import { CDP, CdpParameters } from 'projects/cosmoscan-extension/src/x/cdp/api';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  owner?: string;

  @Input()
  denom?: string;

  @Input()
  params?: CdpParameters;

  @Input()
  cdp?: CDP;

  @Input()
  deposits?: Deposit[];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('params', this.params);
      console.log('cdp', this.cdp);
      console.log('deposits', this.deposits);
    }, 10000);
  }
}
