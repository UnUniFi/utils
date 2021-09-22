import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdpComponent } from './cdp.component';

const routes: Routes = [
  {
    path: '',
    component: CdpComponent,
  },
  {
    path: 'cdps',
    loadChildren: () => import('./cdps/cdps.module').then((mod) => mod.AppCdpsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpRoutingModule { }
