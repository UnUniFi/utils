import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { proto } from '@cosmos-client/core';
import { Key } from 'projects/telescope-extension/src/app/models/keys/key.model';
import { ununifi } from 'ununifi-client';

export type PlaceBidOnSubmitEvent = {
  key: Key;
  privateKey: Uint8Array;
  auctionID: string;
  amount: proto.cosmos.base.v1beta1.ICoin;
  minimumGasPrice: proto.cosmos.base.v1beta1.ICoin;
};

@Component({
  selector: 'view-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css'],
})
export class BidComponent implements OnInit {
  @Input()
  key?: Key | null;

  @Input()
  auctionID?: string | null;

  @Input()
  auction?: ununifi.auction.CollateralAuction | null;

  @Input()
  endTime?: Date | null;

  @Input()
  maxEndTime?: Date | null;

  @Input()
  minimumGasPrices?: proto.cosmos.base.v1beta1.ICoin[];

  @Output()
  appSubmit: EventEmitter<PlaceBidOnSubmitEvent>;

  selectedGasPrice?: proto.cosmos.base.v1beta1.ICoin;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnChanges(): void {
    if (this.minimumGasPrices && this.minimumGasPrices.length > 0) {
      this.selectedGasPrice = this.minimumGasPrices[0];
    }
  }

  ngOnInit(): void {}

  onSubmit(privateKeyString: string, Denom: string, Amount: string, minimumGasPrice: string) {
    if (!this.auctionID) {
      console.error(this.auctionID);
      return;
    }
    if (this.selectedGasPrice === undefined) {
      return;
    }
    this.selectedGasPrice.amount = minimumGasPrice;

    const privateKeyWithNoWhitespace = privateKeyString.replace(/\s+/g, '');
    const privateKeyBuffer = Buffer.from(privateKeyWithNoWhitespace, 'hex');
    const privateKey = Uint8Array.from(privateKeyBuffer);

    this.appSubmit.emit({
      key: this.key!,
      privateKey: privateKey,
      auctionID: this.auctionID,
      amount: {
        denom: Denom,
        amount: Amount,
      },
      minimumGasPrice: this.selectedGasPrice,
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
