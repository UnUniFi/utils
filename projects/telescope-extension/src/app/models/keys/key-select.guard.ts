import { KeyService } from '..';
import { KeySelectDialogService } from './key-select-dialog.service';
import { KeyStoreService } from './key.store.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KeySelectGuard implements CanActivate {
  constructor(
    private readonly key: KeyService,
    private readonly keyStore: KeyStoreService,
    private readonly keySelectDialog: KeySelectDialogService,
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const keys = await this.key.list();
    if (keys.length === 0) {
      window.alert('There is no key. Please create.');
      location.href = `${location.protocol}//${location.host}/keys/create`;
      return true;
    }
    return this.keyStore.currentKey$
      .pipe(first())
      .toPromise()
      .then(async (currentKey) => {
        while (!currentKey) {
          currentKey = await this.keySelectDialog.open();
        }

        return true;
      });
  }
}
