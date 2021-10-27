import { AuctionsRoutingModule } from './auctions-routing.module';
import { CdpsComponent as AuctionsComponent } from './auctions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuctionsModule } from '../../../views/auction/auctions/auctions.module';

@NgModule({
  declarations: [AuctionsComponent],
  imports: [CommonModule, AuctionsRoutingModule, AuctionsModule],
})
export class AppAuctionsModule {}
