import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmosSDKService, KeyService } from '@model-ce/index';
import { Key } from '@model-ce/keys/key.model';
import { cosmosclient } from 'cosmos-client';
import { botany, rest } from 'botany-client';
import { from, Observable, zip } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  keyID$: Observable<string>;
  cdps$: Observable<botany.cdp.Cdp[]>;

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
        cosmosclient.AccAddress.fromPublicKey(
          this.keyService.getPubKey(key.type, key.public_key),
        ),
      ),
    );

    const collateralDenoms$ = from(rest.botany.cdp.params(this.cosmosSdk.sdk)).pipe(
      map((res) => res.data?.params?.collateral_params?.map((p) => p.denom!) || []),
    );

    this.cdps$ = zip(address$, collateralDenoms$).pipe(
      mergeMap(([address, denoms]) =>
        Promise.all(
          denoms.map((denom) =>
            rest.botany.cdp.allCdps(this.cosmosSdk.sdk, address, denom),
          ),
        ),
      ),
      map((result) => result.map((res) => res.result)),
    );
  }

  ngOnInit(): void { }
}
