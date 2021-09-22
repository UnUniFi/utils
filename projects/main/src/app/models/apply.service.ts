import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  constructor(private functions: Functions) {}

  async sendMail(
    name: string,
    email: string,
    company: string,
    country: string,
    address: string,
    comment: string,
  ) {
    await httpsCallable(
      this.functions,
      'mail_send',
    )({
      name,
      email,
      company,
      country,
      address,
      comment,
    });
  }
}
