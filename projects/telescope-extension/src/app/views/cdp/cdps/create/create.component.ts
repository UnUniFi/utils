import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp1 } from 'ununifi-client/esm/openapi';

export type CreateCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  collateralType: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
  principal: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
  balances: proto.cosmos.base.v1beta1.ICoin[];
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
  cdpParams?: ununifi.cdp.IParams | null;

  @Input()
  collateralParams?: ununifi.cdp.ICollateralParam[] | null;

  @Input()
  selectedCollateralType?: string | null;

  @Input()
  selectedCollateralParam?: ununifi.cdp.ICollateralParam | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Input()
  balances?: proto.cosmos.base.v1beta1.ICoin[] | null;

  @Input()
  principalLimit?: number | null;

  @Input()
  collateralLimit?: number | null;

  @Input()
  cdp?: InlineResponse2004Cdp1 | null;

  @Output()
  appSubmit: EventEmitter<CreateCdpOnSubmitEvent>;

  @Output()
  appSelectedCollateralTypeChanged: EventEmitter<string>;

  @Output()
  appCollateralAmountChanged: EventEmitter<number>;

  selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor(private readonly snackBar: MatSnackBar) {
    this.appSubmit = new EventEmitter();
    this.appSelectedCollateralTypeChanged = new EventEmitter();
    this.appCollateralAmountChanged = new EventEmitter();
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
    if (!this.balances) {
      console.error('create-balances', this.balances);
      return;
    }
    if (this.cdp && this.cdp.cdp?.type === collateralType) {
      this.snackBar.open(
        `Already have : ${collateralType} CDP. \n ID: ${this.cdp.cdp?.id}`,
        'Close',
      );
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
      balances: this.balances,
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

  onCollateralAmountChanged(amount: number): void {
    this.appCollateralAmountChanged.emit(amount);
  }
}
