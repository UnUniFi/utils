import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearComponent } from './clear.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [ClearComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [ClearComponent],
})
export class ClearModule {}
