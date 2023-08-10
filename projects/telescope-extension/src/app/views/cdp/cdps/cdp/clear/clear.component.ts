import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type ClearCdpOnSubmitEvent = {
  key: Key;
  privateKey: Uint8Array;
  ownerAddr: cosmosclient.AccAddress;
  collateralType: string;
  repayment: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
  balances: proto.cosmos.base.v1beta1.ICoin[];
};

@Component({
  selector: 'view-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css'],
})
export class ClearComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  owner?: string | null;

  @Input()
  collateralType?: string | null;

  @Input()
  repaymentDenom?: proto.cosmos.base.v1beta1.ICoin | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Input()
  balances?: proto.cosmos.base.v1beta1.ICoin[] | null;

  @Output()
  appSubmit: EventEmitter<ClearCdpOnSubmitEvent>;

  public repayment_amount: string;
  public selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.repayment_amount = '';
  }

  ngOnChanges(): void {
    if (this.minimumGasPrices && this.minimumGasPrices.length > 0) {
      this.selectedGasPrice = this.minimumGasPrices[0];
    }
  }

  ngOnInit(): void {}

  onSubmit(
    privateKeyString: string,
    ownerAddr: string,
    collateralType: string,
    repaymentDenom: string,
    repaymentAmount: string,
    minimumGasPrice: string,
  ) {
    if (this.selectedGasPrice === undefined) {
      return;
    }
    this.selectedGasPrice.amount = minimumGasPrice;

    if (!this.balances) {
      console.error('clear-balances', this.balances);
      return;
    }

    const privateKeyWithNoWhitespace = privateKeyString.replace(/\s+/g, '');
    const privateKeyBuffer = Buffer.from(privateKeyWithNoWhitespace, 'hex');
    const privateKey = Uint8Array.from(privateKeyBuffer);

    this.appSubmit.emit({
      key: this.key!,
      privateKey,
      ownerAddr: cosmosclient.AccAddress.fromString(ownerAddr),
      collateralType: collateralType,
      repayment: {
        denom: repaymentDenom,
        amount: repaymentAmount,
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
