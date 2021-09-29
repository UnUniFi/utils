import { KeySelectGuard } from '../../models/keys/key-select.guard';
import { CdpComponent } from './cdp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CdpComponent,
  },
  {
    path: 'cdps',
    loadChildren: () => import('./cdps/cdps.module').then((mod) => mod.AppCdpsModule),
    canActivate: [KeySelectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpRoutingModule {}
