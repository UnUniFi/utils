import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuctionModule } from '../../views/auction/auction.module';
import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionComponent } from './auction.component';

@NgModule({
  declarations: [AuctionComponent],
  imports: [CommonModule, AuctionRoutingModule, AuctionModule],
})
export class AppAuctionModule {}
