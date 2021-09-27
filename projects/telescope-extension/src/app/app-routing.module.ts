import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule),
  },
  {
    path: 'cdp',
    loadChildren: () => import('./pages/cdp/cdp.module').then((m) => m.AppCdpModule),
  },
  {
    path: 'faucet',
    loadChildren: () => import('./pages/faucet/faucet.module').then((m) => m.AppFaucetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
