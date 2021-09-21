import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaucetComponent } from './faucet.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';

@NgModule({
  declarations: [FaucetComponent],
  imports: [CommonModule, RouterModule, FormsModule, FlexLayoutModule, MaterialModule],
  exports: [FaucetComponent],
})
export class FaucetModule {}
