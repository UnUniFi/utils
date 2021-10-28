import { AuctionModule } from '../../../views/auction/auctions/auction/auction.module';
import { AuctionsModule } from '../../../views/auction/auctions/auctions.module';
import { AuctionComponent } from './auction/auction.component';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuctionsComponent, AuctionComponent],
  imports: [CommonModule, AuctionsRoutingModule, AuctionsModule, AuctionModule],
})
export class AppAuctionsModule {}
