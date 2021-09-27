import { FaucetRequest, FaucetResponse } from './faucet.model';
import { InterfaceFaucetInfrastructureService } from './faucet.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'projects/telescope-extension/src/app/models/config.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FaucetInfrastructureService implements InterfaceFaucetInfrastructureService {
  faucetURL?: string;

  constructor(private configS: ConfigService, private http: HttpClient) {
    this.faucetURL = this.configS.config.extension?.faucet?.faucetURL;
  }

  postFaucetRequest$(faucetRequest: FaucetRequest): Observable<FaucetResponse> {
    const requestBody = {
      address: faucetRequest.address,
      coins: faucetRequest.coins.map((coin) => coin.amount + coin.denom),
    };
    if (this.faucetURL !== undefined) {
      return this.http
        .post(this.faucetURL, requestBody)
        .pipe(map((response) => response as FaucetResponse));
    } else {
      return of({
        address: faucetRequest.address,
        transfers: [],
      });
    }
  }
}
