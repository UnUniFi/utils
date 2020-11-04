import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-w/material.module';

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [DocsComponent],
})
export class DocsModule {}
