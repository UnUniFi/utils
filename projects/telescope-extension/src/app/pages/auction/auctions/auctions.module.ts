import { AuctionModule } from '../../../views/auction/auctions/auction/auction.module';
import { BidModule } from '../../../views/auction/auctions/auction/bid/bid.module';
import { AuctionsModule } from '../../../views/auction/auctions/auctions.module';
import { AuctionComponent } from './auction/auction.component';
import { BidComponent } from './auction/bid/bid.component';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuctionsComponent, AuctionComponent, BidComponent],
  imports: [CommonModule, AuctionsRoutingModule, AuctionsModule, AuctionModule, BidModule],
})
export class AppAuctionsModule {}
