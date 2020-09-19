import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getColorCode(cdp: any) {
    // const hash = crypto
    //   .createHash('sha256')
    //   .update(Buffer.from(`${cdp.cdp.owner}/${cdp.cdp.collateral.denom}`))
    //   .digest()
    //   .toString('hex');
    // return `#${hash.substr(0, 6)}`;
  }
}
