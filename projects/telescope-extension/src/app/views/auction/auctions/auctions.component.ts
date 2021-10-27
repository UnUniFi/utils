import { Component, Input, OnInit } from '@angular/core';
import * as crypto from 'crypto';
import { InlineResponse2004Cdp1 } from 'botany-client/esm/openapi';

@Component({
  selector: 'view-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
  @Input()
  cdps?: InlineResponse2004Cdp1[] | null;

  constructor() {}

  ngOnInit(): void {}

  getColorCode(cdp: InlineResponse2004Cdp1) {
    const hash = crypto
      .createHash('sha256')
      .update(Buffer.from(`${cdp.cdp!.owner}/${cdp.cdp!.collateral!.denom}`))
      .digest()
      .toString('hex');

    return `#${hash.substr(0, 6)}`;
  }
}
