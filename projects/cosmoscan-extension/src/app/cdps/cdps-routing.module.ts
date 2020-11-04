import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdpComponent } from './cdp/cdp.component';
import { ClearComponent } from './cdp/clear/clear.component';
import { DepositComponent } from './cdp/deposit/deposit.component';
import { IssueComponent } from './cdp/issue/issue.component';
import { WithdrawComponent } from './cdp/withdraw/withdraw.component';
import { CdpsComponent } from './cdps.component';
import { CreateComponent } from './create/create.component';

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
    path: ':owner/:denom',
    component: CdpComponent,
  },
  {
    path: ':owner/:denom/deposit',
    component: DepositComponent,
  },
  {
    path: ':owner/:denom/withdraw',
    component: WithdrawComponent,
  },
  {
    path: ':owner/:denom/issue',
    component: IssueComponent,
  },
  {
    path: ':owner/:denom/clear',
    component: ClearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpsRoutingModule {}
