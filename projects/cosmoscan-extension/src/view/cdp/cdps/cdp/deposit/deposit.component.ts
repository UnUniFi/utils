import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

export type DepositCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: AccAddress;
  collateral: Coin;
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
    collateralDenom: string,
    collateralAmount: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      ownerAddr: AccAddress.fromBech32(ownerAddr),
      collateral: {
        denom: collateralDenom,
        amount: collateralAmount,
      },
    });
  }
}
