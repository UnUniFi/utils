import { Component, OnInit } from '@angular/core';
import { AppliValidatorOnSubmitEvent } from '@view/apply-validator/apply-validator.component';
import { ApplyApplicationService } from '@model/apply.application.service';

@Component({
  selector: 'app-apply-validator',
  templateUrl: './apply-validator.component.html',
  styleUrls: ['./apply-validator.component.css'],
})
export class ApplyValidatorComponent implements OnInit {
  constructor(private applyApplication: ApplyApplicationService) {}

  ngOnInit(): void {}

  async onSubmit($event: AppliValidatorOnSubmitEvent) {
    this.applyApplication.sendMail(
      $event.name,
      $event.email,
      $event.company,
      $event.country,
      $event.address,
      $event.comment,
    );
  }
}
