import { Component, Input, OnInit } from '@angular/core';
import { CDP } from '../../x/cdp/api';
import * as crypto from 'crypto';

@Component({
  selector: 'view-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  @Input()
  cdps?: CDP[];

  constructor() {}

  ngOnInit(): void {}

  getColorCode(cdp: CDP) {
    const hash = crypto
      .createHash('sha256')
      .update(Buffer.from(`${cdp.cdp.owner}/${cdp.cdp.collateral.denom}`))
      .digest()
      .toString('hex');

    return `#${hash.substr(0, 6)}`;
  }
}
