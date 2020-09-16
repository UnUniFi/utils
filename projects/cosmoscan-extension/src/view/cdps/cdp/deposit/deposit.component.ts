import { Component, Input, OnInit } from '@angular/core';
import { Key } from '@model-ce/keys/key.model';
import { Coin } from 'cosmos-client/api';

@Component({
  selector: 'view-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  @Input()
  key?: Key;

  @Input()
  owner?: string;

  @Input()
  denom?: string;

  public collateral_amount: string;

  constructor() {
    this.collateral_amount = '';
  }

  ngOnInit(): void {}

  onSubmit(
    collateralDenom: string,
    collateralAmount: string,
    ownerAddr: string,
    privateKey: string,
  ) {
    console.log({ collateralDenom, collateralAmount, ownerAddr, privateKey });
  }
}
