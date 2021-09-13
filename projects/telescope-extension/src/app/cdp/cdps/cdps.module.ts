import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdpsRoutingModule } from './cdps-routing.module';
import { CdpsComponent } from './cdps.component';
import { CreateComponent } from './create/create.component';
import { CdpComponent } from './cdp/cdp.component';
import { DepositComponent } from './cdp/deposit/deposit.component';
import { WithdrawComponent } from './cdp/withdraw/withdraw.component';
import { IssueComponent } from './cdp/issue/issue.component';
import { ClearComponent } from './cdp/clear/clear.component';
import { CdpsModule } from '@view-ce/cdp/cdps/cdps.module';
import { CreateModule } from '@view-ce/cdp/cdps/create/create.module';
import { CdpModule } from '@view-ce/cdp/cdps/cdp/cdp.module';
import { WithdrawModule } from '@view-ce/cdp/cdps/cdp/withdraw/withdraw.module';
import { DepositModule } from '@view-ce/cdp/cdps/cdp/deposit/deposit.module';
import { IssueModule } from '@view-ce/cdp/cdps/cdp/issue/issue.module';
import { ClearModule } from '@view-ce/cdp/cdps/cdp/clear/clear.module';

@NgModule({
  declarations: [
    CdpsComponent,
    CreateComponent,
    CdpComponent,
    DepositComponent,
    WithdrawComponent,
    IssueComponent,
    ClearComponent,
  ],
  imports: [
    CommonModule,
    CdpsRoutingModule,
    CdpsModule,
    CreateModule,
    CdpModule,
    WithdrawModule,
    DepositModule,
    IssueModule,
    ClearModule,
  ],
})
export class AppCdpsModule {}
