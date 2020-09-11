import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [WithdrawComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [WithdrawComponent],
})
export class WithdrawModule {}
