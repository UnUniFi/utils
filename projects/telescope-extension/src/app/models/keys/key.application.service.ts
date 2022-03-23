import { KeyType } from './key.model';
import { KeyService } from './key.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class KeyApplicationService {
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly loadingDialog: LoadingDialogService,
    private readonly key: KeyService,
  ) {}

  async create(id: string, type: KeyType, privateKey: Uint8Array) {
    const key = await this.key.get(id);
    if (key !== undefined) {
      this.snackBar.open('ID is already used', undefined, {
        duration: 6000,
      });
      return;
    }

    const dialogRef = this.loadingDialog.open('Creating');
    try {
      await this.key.set(id, type, privateKey);
    } catch {
      this.snackBar.open('Error has occured', undefined, {
        duration: 6000,
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Successfully created', undefined, {
      duration: 6000,
    });

    await this.router.navigate(['keys', id]);
  }
}
