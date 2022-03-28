import { TxFeeConfirmDialogComponent } from '../../views/tx-fee-confirm-dialog/tx-fee-confirm-dialog.component';
import { Key } from '../keys/key.model';
import { KeyService } from '../keys/key.service';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { CdpService } from './cdp.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { cosmosclient, proto } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class CdpApplicationService {
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog,
    private readonly loadingDialog: LoadingDialogService,
    private readonly cdp: CdpService,
    private readonly key: KeyService,
  ) {}

  async createCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    principal: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
    balances: proto.cosmos.base.v1beta1.ICoin[],
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;
    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    // confirm whether account has enough gas denom for simulation
    const feeDenom = minimumGasPrice.denom;
    const simulationFeeAmount = 1;
    const tempBalance = balances.find((balance) => balance.denom === minimumGasPrice.denom)?.amount;
    const balance = tempBalance ? parseInt(tempBalance) : 0;
    if (simulationFeeAmount > balance) {
      this.snackBar.open(
        `Insufficient fee margin for simulation!\n Simulation fee: ${simulationFeeAmount}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      dialogRefSimulating.close();
      return;
    }

    try {
      simulatedResultData = await this.cdp.simulateToCreateCDP(
        key,
        privateKey,
        collateralType,
        collateral,
        principal,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // check whether the fee exceeded
    const simulatedFee = fee.amount ? parseInt(fee.amount) : 0;
    if (simulatedFee > balance) {
      this.snackBar.open(
        `Insufficient fee margin for Create!\n Simulated fee: ${simulatedFee}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      return;
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }

    const dialogRef = this.loadingDialog.open('Sending...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.createCDP(
        key,
        privateKey,
        collateralType,
        collateral,
        principal,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async drawCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    principal: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
    balances: proto.cosmos.base.v1beta1.ICoin[],
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;
    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    // confirm whether account has enough gas denom for simulation
    const feeDenom = minimumGasPrice.denom;
    const simulationFeeAmount = 1;
    const tempBalance = balances.find((balance) => balance.denom === minimumGasPrice.denom)?.amount;
    const balance = tempBalance ? parseInt(tempBalance) : 0;
    if (simulationFeeAmount > balance) {
      this.snackBar.open(
        `Insufficient fee margin for simulation!\n Simulation fee: ${simulationFeeAmount}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      dialogRefSimulating.close();
      return;
    }

    try {
      simulatedResultData = await this.cdp.simulateToDrawCDP(
        key,
        privateKey,
        collateralType,
        principal,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // check whether the fee exceeded
    const simulatedFee = fee.amount ? parseInt(fee.amount) : 0;
    if (simulatedFee > balance) {
      this.snackBar.open(
        `Insufficient fee margin for issue!\n Simulated fee: ${simulatedFee}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      return;
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }

    const dialogRef = this.loadingDialog.open('Sending...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.drawCDP(
        key,
        privateKey,
        collateralType,
        principal,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async repayCDP(
    key: Key,
    privateKey: Uint8Array,
    collateralType: string,
    repayment: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
    balances: proto.cosmos.base.v1beta1.ICoin[],
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;
    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    // confirm whether account has enough gas denom for simulation
    const feeDenom = minimumGasPrice.denom;
    const simulationFeeAmount = 1;
    const tempBalance = balances.find((balance) => balance.denom === minimumGasPrice.denom)?.amount;
    const balance = tempBalance ? parseInt(tempBalance) : 0;
    if (simulationFeeAmount > balance) {
      this.snackBar.open(
        `Insufficient fee margin for simulation!\n Simulation fee: ${simulationFeeAmount}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      dialogRefSimulating.close();
      return;
    }

    try {
      simulatedResultData = await this.cdp.simulateToRepayCDP(
        key,
        privateKey,
        collateralType,
        repayment,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // check whether the fee exceeded
    const simulatedFee = fee.amount ? parseInt(fee.amount) : 0;
    if (simulatedFee > balance) {
      this.snackBar.open(
        `Insufficient fee margin for clear!\n Simulated fee: ${simulatedFee}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      return;
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }
    const dialogRef = this.loadingDialog.open('Sending...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.repayCDP(
        key,
        privateKey,
        collateralType,
        repayment,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async depositCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
    balances: proto.cosmos.base.v1beta1.ICoin[],
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;
    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    // confirm whether account has enough gas denom for simulation
    const feeDenom = minimumGasPrice.denom;
    const simulationFeeAmount = 1;
    const tempBalance = balances.find((balance) => balance.denom === minimumGasPrice.denom)?.amount;
    const balance = tempBalance ? parseInt(tempBalance) : 0;
    if (simulationFeeAmount > balance) {
      this.snackBar.open(
        `Insufficient fee margin for simulation!\n Simulation fee: ${simulationFeeAmount}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      dialogRefSimulating.close();
      return;
    }

    try {
      simulatedResultData = await this.cdp.simulateToDepositCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // check whether the fee exceeded
    const simulatedFee = fee.amount ? parseInt(fee.amount) : 0;
    if (simulatedFee > balance) {
      this.snackBar.open(
        `Insufficient fee margin for deposit!\n Simulated fee: ${simulatedFee}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      return;
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }

    const dialogRef = this.loadingDialog.open('Sending...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.depositCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }

  async withdrawCDP(
    key: Key,
    privateKey: Uint8Array,
    ownerAddr: cosmosclient.AccAddress,
    collateralType: string,
    collateral: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
    balances: proto.cosmos.base.v1beta1.ICoin[],
  ) {
    // validation
    if (!(await this.key.validatePrivKey(key, privateKey))) {
      this.snackBar.open(`Invalid private key.`, 'Close');
      return;
    }

    // simulate
    let simulatedResultData: SimulatedTxResultResponse;
    let gas: proto.cosmos.base.v1beta1.ICoin;
    let fee: proto.cosmos.base.v1beta1.ICoin;
    const dialogRefSimulating = this.loadingDialog.open('Simulating...');

    // confirm whether account has enough gas denom for simulation
    const feeDenom = minimumGasPrice.denom;
    const simulationFeeAmount = 1;
    const tempBalance = balances.find((balance) => balance.denom === minimumGasPrice.denom)?.amount;
    const balance = tempBalance ? parseInt(tempBalance) : 0;
    if (simulationFeeAmount > balance) {
      this.snackBar.open(
        `Insufficient fee margin for simulation!\n Simulation fee: ${simulationFeeAmount}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      dialogRefSimulating.close();
      return;
    }

    try {
      simulatedResultData = await this.cdp.simulateToWithdrawCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
        minimumGasPrice,
      );
      gas = simulatedResultData.estimatedGasUsedWithMargin;
      fee = simulatedResultData.estimatedFeeWithMargin;
    } catch (error) {
      console.error(error);
      const errorMessage = `Tx simulation failed: ${(error as Error).toString()}`;
      this.snackBar.open(`An error has occur: ${errorMessage}`, 'Close');
      return;
    } finally {
      dialogRefSimulating.close();
    }

    // check whether the fee exceeded
    const simulatedFee = fee.amount ? parseInt(fee.amount) : 0;
    if (simulatedFee > balance) {
      this.snackBar.open(
        `Insufficient fee margin for withdraw!\n Simulated fee: ${simulatedFee}${feeDenom} > Balance: ${balance}${feeDenom}`,
        'Close',
      );
      return;
    }

    // ask the user to confirm the fee with a dialog
    const txFeeConfirmedResult = await this.dialog
      .open(TxFeeConfirmDialogComponent, {
        data: {
          fee,
          isConfirmed: false,
        },
      })
      .afterClosed()
      .toPromise();

    if (txFeeConfirmedResult === undefined || txFeeConfirmedResult.isConfirmed === false) {
      this.snackBar.open('Tx was canceled', undefined, { duration: 6000 });
      return;
    }

    const dialogRef = this.loadingDialog.open('Sending...');

    let txhash: string | undefined;
    try {
      const res: InlineResponse20075 = await this.cdp.withdrawCDP(
        key,
        privateKey,
        ownerAddr,
        collateralType,
        collateral,
        gas,
        fee,
      );
      txhash = res.tx_response?.txhash;
      if (txhash === undefined) {
        throw Error('invalid txhash!');
      }
    } catch (error) {
      const msg = (error as Error).toString();
      this.snackBar.open(`Error has occured: ${msg}`, undefined, {
        duration: 6000,
      });
      console.error(error);
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully sent', undefined, {
      duration: 6000,
    });

    const redirectUrl = `${location.protocol}//${location.hostname}/txs/${txhash}`;
    window.location.href = redirectUrl;
  }
}
