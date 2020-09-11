import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [IssueComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [IssueComponent],
})
export class IssueModule {}
