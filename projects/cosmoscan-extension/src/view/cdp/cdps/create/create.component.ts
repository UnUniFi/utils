import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { cosmos } from 'cosmos-client';
import { botany } from 'botany-client'

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateral: cosmos.base.v1beta1.ICoin;
  principal: cosmos.base.v1beta1.ICoin;
};

@Component({
  selector: 'view-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  cdpParams?: botany.cdp.IParams | null;

  @Output()
  appSubmit: EventEmitter<CreateCdpOnSubmitEvent>;

  public collateral: cosmos.base.v1beta1.ICoin;
  public principal: cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.collateral = {
      denom: '',
      amount: '',
    };
    this.principal = {
      denom: '',
      amount: '',
    };
  }

  ngOnInit(): void { }

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
