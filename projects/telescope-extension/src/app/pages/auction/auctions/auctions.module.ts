import { AuctionModule } from '../../../views/auction/auctions/auction/auction.module';
import { PlaceBidModule } from '../../../views/auction/auctions/auction/place-bid/place-bid.module';
import { AuctionsModule } from '../../../views/auction/auctions/auctions.module';
import { AuctionComponent } from './auction/auction.component';
import { PlaceBidComponent } from './auction/place-bid/place-bid.component';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuctionsComponent, AuctionComponent, PlaceBidComponent],
  imports: [CommonModule, AuctionsRoutingModule, AuctionsModule, AuctionModule, PlaceBidModule],
})
export class AppAuctionsModule {}
