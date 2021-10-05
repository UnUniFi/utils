import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { botany } from 'botany-client';
import { proto } from 'cosmos-client';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
  principal: proto.cosmos.base.v1beta1.ICoin;
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

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

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
