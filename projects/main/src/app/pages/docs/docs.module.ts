import { DocsModule } from '../../views/docs/docs.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, DocsRoutingModule, DocsModule],
})
export class AppDocsModule {}
