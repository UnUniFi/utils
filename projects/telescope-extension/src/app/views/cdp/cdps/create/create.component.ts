import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { proto } from '@cosmos-client/core';
import { botany } from 'botany-client';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateralType: string;
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

  @Input()
  collateralParams?: botany.cdp.ICollateralParam[] | null;

  @Input()
  selectedCollateralType?: string | null;

  @Input()
  selectedCollateralParam?: botany.cdp.ICollateralParam | null;

  @Output()
  appSubmit: EventEmitter<CreateCdpOnSubmitEvent>;

  @Output()
  appSelectedCollateralTypeChanged: EventEmitter<string>;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.appSelectedCollateralTypeChanged = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(
    collateralType: string,
    collateralDenom: string,
    collateralAmount: string,
    principalDenom: string,
    principalAmount: string,
    privateKey: string,
  ) {
    this.appSubmit.emit({
      key: this.key!,
      privateKey,
      collateralType,
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

  onSelectedCollateralTypeChanged(collateralType: string): void {
    this.appSelectedCollateralTypeChanged.emit(collateralType);
  }
}
