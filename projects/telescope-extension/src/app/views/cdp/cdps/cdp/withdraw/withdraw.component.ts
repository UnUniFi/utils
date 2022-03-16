import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type WithdrawCdpOnSubmitEvent = {
  key: Key;
  privateKey: string;
  ownerAddr: cosmosclient.AccAddress;
  collateralType: string;
  collateral: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
  balances: proto.cosmos.base.v1beta1.ICoin[];
};

@Component({
  selector: 'view-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  owner?: string | null;

  @Input()
  collateralType?: string | null;

  @Input()
  denom?: string | null;

  @Input()
  withdrawLimit?: number | null;

  @Input()
  balances?: proto.cosmos.base.v1beta1.ICoin[] | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Output()
  appSubmit: EventEmitter<WithdrawCdpOnSubmitEvent>;

  public collateral_amount: string;
  public selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.collateral_amount = '';
  }

  ngOnChanges(): void {
    if (this.minimumGasPrices && this.minimumGasPrices.length > 0) {
      this.selectedGasPrice = this.minimumGasPrices[0];
    }
  }

  ngOnInit(): void {}

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
    this.selectedGasPrice.amount = minimumGasPrice.toString();
    if (!this.balances) {
      console.error('withdraw-balances', this.balances);
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
