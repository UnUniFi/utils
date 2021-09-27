import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from 'cosmos-client';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type WithdrawCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: cosmosclient.AccAddress;
  collateral: proto.cosmos.base.v1beta1.ICoin;
};

@Component({
  selector: 'view-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  owner?: string | null;

  @Input()
  denom?: string | null;

  @Output()
  appSubmit: EventEmitter<WithdrawCdpOnSubmitEvent>;

  public collateral_amount: string;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.collateral_amount = '';
  }

  ngOnInit(): void {}

  onSubmit(
    privateKey: string,
    ownerAddr: string,
    collateralDenom: string,
    collateralAmount: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      ownerAddr: cosmosclient.AccAddress.fromString(ownerAddr),
      collateral: {
        denom: collateralDenom,
        amount: collateralAmount,
      },
    });
  }
}
