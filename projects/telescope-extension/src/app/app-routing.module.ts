import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.AppHomeModule),
  },
  {
    path: 'auction',
    loadChildren: () => import('./pages/auction/auction.module').then((m) => m.AppAuctionModule),
  },
  {
    path: 'cdp',
    loadChildren: () => import('./pages/cdp/cdp.module').then((m) => m.AppCdpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
