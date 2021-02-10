import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdpRoutingModule } from './cdp-routing.module';
import { CdpComponent } from './cdp.component';
import { CdpModule } from '@view-ce/cdp/cdp.module';

@NgModule({
  declarations: [CdpComponent],
  imports: [CommonModule, CdpRoutingModule, CdpModule],
})
export class AppCdpModule {}
