import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CosmosSDKService } from '@model-ce/cosmos-sdk.service';
import { botany, rest } from 'botany-client'

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  params$: Observable<botany.cdp.IParams>;
  constructor(private cosmosSDK: CosmosSDKService) {
    const timer$ = timer(0, 60 * 1000);

    this.params$ = timer$.pipe(
      mergeMap((_) => rest.botany.cdp.params(this.cosmosSDK.sdk)),
      map((res) => res.data.params!),
    );
  }

  ngOnInit(): void { }
}
