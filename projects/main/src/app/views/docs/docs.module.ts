import { MaterialModule } from '../material.module';
import { DocsComponent } from './docs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [DocsComponent],
})
export class DocsModule {}
