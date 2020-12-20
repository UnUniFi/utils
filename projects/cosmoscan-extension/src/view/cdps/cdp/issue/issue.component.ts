import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

export type IssueCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: AccAddress;
  denom: string;
  principal: Coin;
};

@Component({
  selector: 'view-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  owner?: string | null;

  @Input()
  denom?: string | null;

  @Input()
  principalDenom?: string | null;

  @Output()
  appSubmit: EventEmitter<IssueCdpOnSubmitEvent>;

  public principal_amount: string;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.principal_amount = '';
  }

  ngOnInit(): void {}

  onSubmit(
    privateKey: string,
    ownerAddr: string,
    collateralDenom: string,
    principalDenom: string,
    principalAmount: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey,
      ownerAddr: AccAddress.fromBech32(ownerAddr),
      denom: collateralDenom,
      principal: {
        denom: principalDenom,
        amount: principalAmount,
      },
    });
  }
}
