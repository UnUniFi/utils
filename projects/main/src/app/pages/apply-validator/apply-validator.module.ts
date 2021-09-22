import { ApplyValidatorModule } from '../../views/apply-validator/apply-validator.module';
import { ApplyValidatorRoutingModule } from './apply-validator-routing.module';
import { ApplyValidatorComponent } from './apply-validator.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ApplyValidatorComponent],
  imports: [CommonModule, ApplyValidatorRoutingModule, ApplyValidatorModule],
})
export class AppApplyValidatorModule {}
