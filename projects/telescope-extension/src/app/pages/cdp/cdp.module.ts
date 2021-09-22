import { CdpModule } from '../../views/cdp/cdp.module';
import { CdpRoutingModule } from './cdp-routing.module';
import { CdpComponent } from './cdp.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CdpComponent],
  imports: [CommonModule, CdpRoutingModule, CdpModule],
})
export class AppCdpModule {}
