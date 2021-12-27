import { AuctionComponent } from './auction.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'projects/telescope-extension/src/app/views/material.module';

@NgModule({
  declarations: [AuctionComponent],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  exports: [AuctionComponent],
})
export class AuctionModule {}
