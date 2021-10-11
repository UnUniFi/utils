import { CdpComponent } from './cdp/cdp.component';
import { ClearComponent } from './cdp/clear/clear.component';
import { DepositComponent } from './cdp/deposit/deposit.component';
import { IssueComponent } from './cdp/issue/issue.component';
import { WithdrawComponent } from './cdp/withdraw/withdraw.component';
import { CdpsComponent } from './cdps.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CdpsComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: ':owner/:collateralType',
    component: CdpComponent,
  },
  {
    path: ':owner/:collateralType/deposit',
    component: DepositComponent,
  },
  {
    path: ':owner/:collateralType/withdraw',
    component: WithdrawComponent,
  },
  {
    path: ':owner/:collateralType/issue',
    component: IssueComponent,
  },
  {
    path: ':owner/:collateralType/clear',
    component: ClearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpsRoutingModule {}
