import { TermsModule } from '../../views/terms/terms.module';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, TermsRoutingModule, TermsModule],
})
export class AppTermsModule {}
