import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdpsComponent } from './cdps.component';

const routes: Routes = [
  {
    path: '',
    component: CdpsComponent,
  },
  {
    path: 'create',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpsRoutingModule {}
