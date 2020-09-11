import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyValidatorComponent } from './apply-validator.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-e/material.module';

@NgModule({
  declarations: [ApplyValidatorComponent],
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, MaterialModule],
  exports: [ApplyValidatorComponent],
})
export class ApplyValidatorModule {}
