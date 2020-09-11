import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  constructor(private functions: AngularFireFunctions) {}

  sendMail(
    name: string,
    email: string,
    company: string,
    country: string,
    address: string,
    comment: string,
  ) {
    return this.functions
      .httpsCallable('mail_send')({
        name,
        email,
        company,
        country,
        address,
        comment,
      })
      .toPromise();
  }
}
