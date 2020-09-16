import { Injectable } from '@angular/core';
import { BroadcastTxCommitResult, Coin } from 'cosmos-client/api';
import { auth } from 'cosmos-client/x/auth';
import { AccAddress } from 'cosmos-client';
import { CosmosSDKService } from '@model-ce/index';
import { Key } from '../keys/key.model';
import { ICdpInfrastructure } from './cdp.service';
import { cdpPost } from '../../x/cdp/module';
import { KeyInfrastructureService } from '../keys/key.infrastructure.service';
import { IKeyInfrastructure } from '../keys/key.service';

@Injectable({
  providedIn: 'root',
})
export class CdpInfrastructureService implements ICdpInfrastructure {
  private readonly iKeyInfrastructure: IKeyInfrastructure;
  constructor(
    private readonly cosmosSDK: CosmosSDKService,
    keyInfrastructure: KeyInfrastructureService,
  ) {
    this.iKeyInfrastructure = keyInfrastructure;
  }

  async createCDP(
    key: Key,
    privateKey: string,
    collateral: Coin,
    principal: Coin,
  ): Promise<BroadcastTxCommitResult> {
    const privKey = this.iKeyInfrastructure.getPrivKey(key.type, privateKey);
    const sender = AccAddress.fromPublicKey(privKey.getPubKey());
    const account = await auth
      .accountsAddressGet(this.cosmosSDK.sdk, sender)
      .then((res) => res.data.result);

    const unsignedStdTx = await cdpPost(this.cosmosSDK.sdk, {
      base_req: {
        from: sender.toBech32(),
        memo: '',
        chain_id: this.cosmosSDK.sdk.chainID,
        account_number: account.account_number.toString(),
        sequence: account.sequence.toString(),
        gas: '',
        gas_adjustment: '',
        fees: [],
        simulate: false,
      },
      sender,
      collateral,
      principal,
    }).then((res) => res.data);

    const signedStdTx = auth.signStdTx(
      this.cosmosSDK.sdk,
      privKey,
      unsignedStdTx,
      account.account_number.toString(),
      account.sequence.toString(),
    );

    return auth
      .txsPost(this.cosmosSDK.sdk, signedStdTx, 'block')
      .then((res) => res.data);
  }
}
