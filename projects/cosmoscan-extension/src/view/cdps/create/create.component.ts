import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { Coin } from 'cosmos-client/api';

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateral: Coin;
  principal: Coin;
};

@Component({
  selector: 'view-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @Input()
  key?: Key;

  @Output()
  appSubmit: EventEmitter<CreateCdpOnSubmitEvent>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  //todo: Put denom and amount together
  onSubmit(
    collateralDenom: string,
    collateralAmount: string,
    principalDenom: string,
    principalAmount: string,
    privateKey: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey,
      collateral: {
        denom: collateralDenom,
        amount: collateralAmount,
      },
      principal: {
        denom: principalDenom,
        amount: principalAmount,
      },
    });
  }
}
