import { AuctionComponent } from './auction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuctionComponent,
  },
  {
    path: 'auctions',
    loadChildren: () => import('./auctions/auctions.module').then((mod) => mod.AppAuctionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionRoutingModule {}
