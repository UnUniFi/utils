import { AuctionComponent } from './auction/auction.component';
import { BidComponent } from './auction/bid/bid.component';
import { AuctionsComponent } from './auctions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuctionsComponent,
  },
  {
    path: ':auction_id',
    component: AuctionComponent,
  },
  {
    path: ':auction_id/place-bid',
    component: BidComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionsRoutingModule {}
