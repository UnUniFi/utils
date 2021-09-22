import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaucetGuard } from '@model-ce/faucets/faucet.guard';
import { FaucetComponent } from './faucet.component';

const routes: Routes = [
  {
    path: '',
    component: FaucetComponent,
    canActivate: [FaucetGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaucetRoutingModule {}
