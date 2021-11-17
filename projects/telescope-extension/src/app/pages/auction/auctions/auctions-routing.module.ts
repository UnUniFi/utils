import { KeySelectGuard } from '../../../models/keys/key-select.guard';
import { AuctionComponent } from './auction/auction.component';
import { PlaceBidComponent } from './auction/place-bid/place-bid.component';
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
    component: PlaceBidComponent,
    canActivate: [KeySelectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionsRoutingModule {}
