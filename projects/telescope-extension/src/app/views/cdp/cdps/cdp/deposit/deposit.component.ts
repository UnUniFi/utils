import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type DepositCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: cosmosclient.AccAddress;
  collateralType: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
  balances: proto.cosmos.base.v1beta1.ICoin[];
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
  collateralType?: string | null;

  @Input()
  denom?: proto.cosmos.base.v1beta1.ICoin | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Input()
  balances?: proto.cosmos.base.v1beta1.ICoin[] | null;

  @Output()
  appSubmit: EventEmitter<DepositCdpOnSubmitEvent>;

  public collateral_amount: string;
  public selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.collateral_amount = '';
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.minimumGasPrices && this.minimumGasPrices.length > 0) {
      this.selectedGasPrice = this.minimumGasPrices[0];
    }
  }

  onSubmit(
    privateKey: string,
    ownerAddr: string,
    collateralType: string,
    collateralDenom: string,
    collateralAmount: string,
    minimumGasPrice: string,
  ) {
    if (this.selectedGasPrice === undefined) {
      return;
    }
    this.selectedGasPrice.amount = minimumGasPrice;

    if (!this.balances) {
      console.error('balances', this.balances);
      return;
    }

    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      ownerAddr: cosmosclient.AccAddress.fromString(ownerAddr),
      collateralType,
      collateral: {
        denom: collateralDenom,
        amount: collateralAmount,
      },
      minimumGasPrice: this.selectedGasPrice,
      balances: this.balances,
    });
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
