import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { botany } from 'ununifi-client';

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateralType: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
  principal: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
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

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Output()
  appSubmit: EventEmitter<CreateCdpOnSubmitEvent>;

  @Output()
  appSelectedCollateralTypeChanged: EventEmitter<string>;

  selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.appSelectedCollateralTypeChanged = new EventEmitter();
  }

  ngOnChanges(): void {
    if (this.minimumGasPrices && this.minimumGasPrices.length > 0) {
      this.selectedGasPrice = this.minimumGasPrices[0];
    }
  }

  ngOnInit(): void {}

  onSubmit(
    collateralType: string,
    collateralDenom: string,
    collateralAmount: string,
    principalDenom: string,
    principalAmount: string,
    privateKey: string,
    minimumGasPrice: string,
  ) {
    if (!collateralAmount || !principalAmount) {
      return;
    }
    if (this.selectedGasPrice === undefined) {
      return;
    }
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
      minimumGasPrice: this.selectedGasPrice,
    });
  }

  onSelectedCollateralTypeChanged(collateralType: string): void {
    this.appSelectedCollateralTypeChanged.emit(collateralType);
  }

  onMinimumGasDenomChanged(denom: string): void {
    this.selectedGasPrice = this.minimumGasPrices?.find(
      (minimumGasPrice) => minimumGasPrice.denom === denom,
    );
  }

  onMinimumGasAmountSliderChanged(amount: string): void {
    if (this.selectedGasPrice) {
      this.selectedGasPrice.amount = amount;
    }
  }
}
