import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export type AppliValidatorOnSubmitEvent = {
  name: string;
  email: string;
  company: string;
  country: string;
  address: string;
  comment: string;
};

@Component({
  selector: 'view-apply-validator',
  templateUrl: './apply-validator.component.html',
  styleUrls: ['./apply-validator.component.css'],
})
export class ApplyValidatorComponent implements OnInit {
  @Output()
  appSubmit: EventEmitter<AppliValidatorOnSubmitEvent>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(
    name: string,
    email: string,
    company: string,
    country: string,
    address: string,
    comment: string,
  ) {
    this.appSubmit.emit({
      name,
      email,
      company,
      country,
      address,
      comment,
    });
  }
}
