import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmosSDKService, KeyService } from '@model-ce/index';
import { Key } from '@model-ce/keys/key.model';
import { cosmosclient } from 'cosmos-client';
import { botany, rest } from 'botany-client';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { InlineResponse2004Cdp1 } from 'projects/botany-client/dist/openapi-eurx';

@Component({
  selector: 'app-cdps',
  templateUrl: './cdps.component.html',
  styleUrls: ['./cdps.component.css'],
})
export class CdpsComponent implements OnInit {
  keyID$: Observable<string>;
  cdps$: Observable<InlineResponse2004Cdp1[]>;

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

    const collateralDenoms$ = this.cosmosSdk.sdk$.pipe(
      mergeMap(sdk => rest.botany.cdp.params(sdk.rest)),
      map((res) => res.data?.params?.collateral_params?.map((p) => p.denom!) || []),
    )
    this.cdps$ = combineLatest([address$, collateralDenoms$, this.cosmosSdk.sdk$]).pipe(
      mergeMap(([address, denoms, sdk]) =>
        Promise.all(
          denoms.map((denom) =>
            rest.botany.cdp.cdp(sdk.rest, address, denom),
          ),
        ),
      ),
      map((result) => result.map((res) => res.data)),
      map(data => data.map(e => e.cdp!))
    );
  }

  ngOnInit(): void { }
}
