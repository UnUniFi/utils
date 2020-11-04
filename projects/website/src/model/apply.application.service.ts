import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplyService } from './apply.service';
import { LoadingDialogService } from 'ng-loading-dialog';

@Injectable({
  providedIn: 'root',
})
export class ApplyApplicationService {
  constructor(
    private router: Router,
    private loadingDialog: LoadingDialogService,
    private api: ApplyService,
    private snackBar: MatSnackBar,
  ) {}

  async sendMail(
    name: string,
    email: string,
    company: string,
    country: string,
    address: string,
    comment: string,
  ) {
    const dialogRef = this.loadingDialog.open('Sending');

    try {
      await this.api.sendMail(name, email, company, country, address, comment);
    } catch {
      this.snackBar.open('Error has occured', undefined, { duration: 6000 });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('Complete', undefined, { duration: 6000 });
    await this.router.navigate(['']);
  }
}
