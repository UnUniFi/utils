import { CosmosSDKService, KeyService } from '../../../models/index';
import { Key } from '../../../models/keys/key.model';
import { KeyStoreService } from '../../../models/keys/key.store.service';
import { Component, OnInit } from '@angular/core';
import { cosmosclient } from '@cosmos-client/core';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { rest } from 'ununifi-client';
import { InlineResponse2004Cdp1 } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'app-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  cdps$: Observable<(InlineResponse2004Cdp1 | undefined)[]>;

  constructor(
    private readonly key: KeyService,
    private readonly keyStore: KeyStoreService,
    private readonly cosmosSdk: CosmosSDKService,
  ) {
    const key$ = this.keyStore.currentKey$.asObservable();
    const address$ = key$.pipe(
      filter((key: Key | undefined): key is Key => key !== undefined),
      map((key: Key) =>
        cosmosclient.AccAddress.fromPublicKey(this.key.getPubKey(key.type, key.public_key)),
      ),
    );

    const collateralTypes$ = this.cosmosSdk.sdk$.pipe(
      mergeMap((sdk) => rest.ununifi.cdp.params(sdk.rest)),
      map((res) => res.data?.params?.collateral_params?.map((p) => p.type!) || []),
    );
    this.cdps$ = combineLatest([address$, collateralTypes$, this.cosmosSdk.sdk$]).pipe(
      mergeMap(([address, collateralTypes, sdk]) =>
        Promise.all(
          collateralTypes.map((collateralType) =>
            rest.ununifi.cdp.cdp(sdk.rest, address, collateralType).catch((err) => {
              console.log(err);
              return;
            }),
          ),
        ),
      ),
      map((result) => result.map((res) => (res ? res.data.cdp! : undefined))),
    );
  }

  ngOnInit(): void {}
}
