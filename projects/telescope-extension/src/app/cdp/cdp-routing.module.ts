import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cdp',
    loadChildren: () =>
      import('./cdps/cdps.module').then((mod) => mod.AppCdpsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpRoutingModule {}
