import { MaterialModule } from '../material.module';
import { ApplyValidatorComponent } from './apply-validator.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplyValidatorComponent],
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, MaterialModule],
  exports: [ApplyValidatorComponent],
})
export class ApplyValidatorModule {}
