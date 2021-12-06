import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type DepositCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: cosmosclient.AccAddress;
  collateralType: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
};

@Component({
  selector: 'view-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  owner?: string | null;

  @Input()
  collateralType?: string | null;

  @Input()
  denom?: string | null;

  @Output()
  appSubmit: EventEmitter<DepositCdpOnSubmitEvent>;

  public collateral_amount: string;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.collateral_amount = '';
  }

  ngOnInit(): void {}

  onSubmit(
    privateKey: string,
    ownerAddr: string,
    collateralType: string,
    collateralDenom: string,
    collateralAmount: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      ownerAddr: cosmosclient.AccAddress.fromString(ownerAddr),
      collateralType,
      collateral: {
        denom: collateralDenom,
        amount: collateralAmount,
      },
    });
  }
}
