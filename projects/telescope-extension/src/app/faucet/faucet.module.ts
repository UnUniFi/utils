import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaucetRoutingModule } from './faucet-routing.module';
import { FaucetComponent } from './faucet.component';
import { FaucetModule } from 'projects/telescope-extension/src/view/faucet/faucet.module';

@NgModule({
  declarations: [FaucetComponent],
  imports: [CommonModule, FaucetRoutingModule, FaucetModule],
})
export class AppFaucetModule {}
