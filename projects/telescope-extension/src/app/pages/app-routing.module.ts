import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cdp',
    loadChildren: () => import('./cdp/cdp.module').then((m) => m.AppCdpModule),
  },
  {
    path: 'faucet',
    loadChildren: () => import('./faucet/faucet.module').then((m) => m.AppFaucetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }