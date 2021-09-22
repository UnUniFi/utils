import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaucetComponent } from './faucet.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@view-ce/material.module';
import { MaxModule, MinModule } from 'ng-min-max';

@NgModule({
  declarations: [FaucetComponent],
  imports: [CommonModule, RouterModule, FormsModule, MinModule, MaxModule, FlexLayoutModule, MaterialModule],
  exports: [FaucetComponent],
})
export class FaucetModule { }
