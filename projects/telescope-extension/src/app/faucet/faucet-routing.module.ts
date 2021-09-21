import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaucetComponent } from './faucet.component';

const routes: Routes = [
  {
    path: '',
    component: FaucetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaucetRoutingModule {}
