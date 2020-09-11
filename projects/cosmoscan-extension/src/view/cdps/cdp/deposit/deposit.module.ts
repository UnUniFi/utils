import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [DepositComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [DepositComponent],
})
export class DepositModule {}
