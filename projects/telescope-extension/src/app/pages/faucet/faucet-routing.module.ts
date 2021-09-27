import { FaucetComponent } from './faucet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaucetGuard } from 'projects/telescope-extension/src/app/models/faucets/faucet.guard';

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
