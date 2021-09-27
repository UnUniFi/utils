import { ApplyApplicationService } from '../../models/apply.application.service';
import { AppliValidatorOnSubmitEvent } from '../../views/apply-validator/apply-validator.component';
import { Component, OnInit } from '@angular/core';

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
