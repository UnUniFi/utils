import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyValidatorComponent } from './apply-validator.component';

const routes: Routes = [{ path: '', component: ApplyValidatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyValidatorRoutingModule {}
