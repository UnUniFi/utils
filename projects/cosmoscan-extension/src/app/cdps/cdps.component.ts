import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmosSDKService, KeyService } from '@model-ce/index';
import { Key } from '@model-ce/keys/key.model';
import { AccAddress } from 'cosmos-client';
import { auth } from 'cosmos-client/x/auth';
import { from, Observable, zip } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { CDP } from '../../x/cdp/api';
import { cdpCdpsCdpOwnerDenomGet, cdpParametersGet } from '../../x/cdp/module';

@Component({
  selector: 'app-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  keyID$: Observable<string>;
  cdps$: Observable<CDP[]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly keyService: KeyService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    this.keyID$ = this.route.queryParams.pipe(
      map((params) => params['key_id']),
    );
    const address$ = this.keyID$.pipe(
      mergeMap((keyId: string) => this.keyService.get(keyId)),
      filter((key: Key | undefined): key is Key => key !== undefined),
      map((key: Key) =>
        AccAddress.fromPublicKey(
          this.keyService.getPubKey(key.type, key.public_key),
        ),
      ),
      mergeMap((address) =>
        auth.accountsAddressGet(this.cosmosSdk.sdk, address),
      ),
      map((res) => res.data && res.data.result.address),
      filter((address): address is AccAddress => address !== undefined),
    );

    const collateralDenoms$ = from(cdpParametersGet(this.cosmosSdk.sdk)).pipe(
      map((param) => param.result.collateral_params.map((p) => p.denom)),
    );

    this.cdps$ = zip(address$, collateralDenoms$).pipe(
      mergeMap(([address, denoms]) =>
        Promise.all(
          denoms.map((denom) =>
            cdpCdpsCdpOwnerDenomGet(this.cosmosSdk.sdk, address, denom),
          ),
        ),
      ),
      map((result) => result.map((res) => res.result)),
    );
  }

  ngOnInit(): void {}
}
