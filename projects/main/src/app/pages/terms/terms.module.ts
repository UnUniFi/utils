import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { TermsModule } from '@view-w/terms/terms.module';

@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, TermsRoutingModule, TermsModule],
})
export class AppTermsModule {}
