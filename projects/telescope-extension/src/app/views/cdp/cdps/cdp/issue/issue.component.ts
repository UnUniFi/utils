import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cosmosclient, proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';

export type IssueCdpOnSubmitEvent = {
  key: Key;
  privateKey: Uint8Array;
  ownerAddr: cosmosclient.AccAddress;
  collateralType: string;
  principal: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
  balances: proto.cosmos.base.v1beta1.ICoin[];
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
  collateralType?: string | null;

  @Input()
  principalDenom?: string | null;

  @Input()
  issueLimit?: number | null;

  @Input()
  balances?: proto.cosmos.base.v1beta1.ICoin[] | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Output()
  appSubmit: EventEmitter<IssueCdpOnSubmitEvent>;

  public principal_amount: string;
  public selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
    this.principal_amount = '';
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
    principalDenom: string,
    principalAmount: string,
    minimumGasPrice: string,
  ) {
    if (this.selectedGasPrice === undefined) {
      return;
    }
    this.selectedGasPrice.amount = minimumGasPrice.toString();
    if (!this.balances) {
      console.error('issue-balances', this.balances);
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
      principal: {
        denom: principalDenom,
        amount: principalAmount,
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
