import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CosmosSDKService } from '@model-ce/cosmos-sdk.service';
import { cdp } from '../../x/cdp';
import { CdpParameters } from '../../x/cdp/api';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  params$: Observable<CdpParameters>;
  constructor(private cosmosSDK: CosmosSDKService) {
    const timer$ = timer(0, 60 * 1000);

    this.params$ = timer$.pipe(
      mergeMap((_) => cdp.cdpParametersGet(this.cosmosSDK.sdk)),
      map((res) => res.result),
    );
  }

  ngOnInit(): void {}
}
