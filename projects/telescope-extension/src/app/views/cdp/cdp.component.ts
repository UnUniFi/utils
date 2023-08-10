import { Component, Input, OnInit } from '@angular/core';
import { ununifi } from 'ununifi-client';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  collateralParams?: ununifi.cdp.ICollateralParam[] | null;
  @Input()
  debtParams?: ununifi.cdp.IDebtParam[] | null;

  constructor() {}

  ngOnInit(): void {}
}
