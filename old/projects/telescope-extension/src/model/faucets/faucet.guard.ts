import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ConfigService } from '@model-ce/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaucetGuard implements CanActivate {
  constructor(private configS: ConfigService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.configS.config.extension?.faucet?.hasFaucet ? this.configS.config.extension?.faucet?.hasFaucet : false;
  }
}
