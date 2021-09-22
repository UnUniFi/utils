import { CdpComponent } from './cdp/cdp.component';
import { ClearComponent } from './cdp/clear/clear.component';
import { DepositComponent } from './cdp/deposit/deposit.component';
import { IssueComponent } from './cdp/issue/issue.component';
import { WithdrawComponent } from './cdp/withdraw/withdraw.component';
import { CdpsComponent } from './cdps.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeySelectGuard } from 'projects/telescope-extension/src/app/models/keys/key-select.guard';

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
    canActivate: [KeySelectGuard],
  },
  {
    path: ':owner/:denom/deposit',
    component: DepositComponent,
    canActivate: [KeySelectGuard],
  },
  {
    path: ':owner/:denom/withdraw',
    component: WithdrawComponent,
    canActivate: [KeySelectGuard],
  },
  {
    path: ':owner/:denom/issue',
    component: IssueComponent,
    canActivate: [KeySelectGuard],
  },
  {
    path: ':owner/:denom/clear',
    component: ClearComponent,
    canActivate: [KeySelectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdpsRoutingModule {}
