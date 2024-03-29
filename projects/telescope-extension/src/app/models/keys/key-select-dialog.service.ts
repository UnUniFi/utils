import { Key } from './key.model';
import { KeyService } from './key.service';
import { KeyStoreService } from './key.store.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KeySelectDialogComponent } from 'projects/telescope-extension/src/app/views/keys/key-select-dialog/key-select-dialog.component';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KeySelectDialogService {
  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly key: KeyService,
    private readonly keyStore: KeyStoreService,
  ) {}

  async open() {
    const keys = await this.key.list();
    if (keys.length === 0) {
      window.alert('There is no key. Please create.');
      this.router.navigate(['keys', 'create']);
    }

    const currentKey = await this.keyStore.currentKey$.pipe(first()).toPromise();

    const result: Key | undefined = await this.dialog
      .open(KeySelectDialogComponent, {
        data: { keys, currentKeyID: currentKey?.id },
      })
      .afterClosed()
      .toPromise();

    if (!result || result.id === currentKey?.id) {
      return result;
    }
    this.keyStore.setCurrentKey(result);
    return result;
  }
}
