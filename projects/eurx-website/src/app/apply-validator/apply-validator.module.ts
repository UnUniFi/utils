import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyValidatorRoutingModule } from './apply-validator-routing.module';
import { ApplyValidatorComponent } from './apply-validator.component';
import { ApplyValidatorModule } from '@view-e/apply-validator/apply-validator.module';

@NgModule({
  declarations: [ApplyValidatorComponent],
  imports: [CommonModule, ApplyValidatorRoutingModule, ApplyValidatorModule],
})
export class AppApplyValidatorModule {}
