import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdpsComponent } from './cdps.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [CdpsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [CdpsComponent],
})
export class CdpsModule {}
