import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

export type ClearCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: AccAddress;
  denom: string;
  payment: Coin;
};

@Component({
  selector: 'view-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css'],
})
export class ClearComponent implements OnInit {
  @Input()
  key?: Key;

  @Input()
  owner?: string;

  @Input()
  denom?: string;

  @Input()
  paymentDenom?: string;

  @Output()
  appSubmit: EventEmitter<ClearCdpOnSubmitEvent>;

  public payment_amount: string;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.payment_amount = '';
  }

  ngOnInit(): void {}

  onSubmit(
    privateKey: string,
    ownerAddr: string,
    collateralDenom: string,
    paymentDenom: string,
    paymentAmount: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey,
      ownerAddr: AccAddress.fromBech32(ownerAddr),
      denom: collateralDenom,
      payment: {
        denom: paymentDenom,
        amount: paymentAmount,
      },
    });
  }
}
