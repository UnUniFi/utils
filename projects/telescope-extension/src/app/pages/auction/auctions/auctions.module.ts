import { AuctionsModule } from '../../../views/auction/auctions/auctions.module';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuctionsComponent],
  imports: [CommonModule, AuctionsRoutingModule, AuctionsModule],
})
export class AppAuctionsModule {}
