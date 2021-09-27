import { CdpModule } from '../../../views/cdp/cdps/cdp/cdp.module';
import { ClearModule } from '../../../views/cdp/cdps/cdp/clear/clear.module';
import { DepositModule } from '../../../views/cdp/cdps/cdp/deposit/deposit.module';
import { IssueModule } from '../../../views/cdp/cdps/cdp/issue/issue.module';
import { WithdrawModule } from '../../../views/cdp/cdps/cdp/withdraw/withdraw.module';
import { CdpsModule } from '../../../views/cdp/cdps/cdps.module';
import { CreateModule } from '../../../views/cdp/cdps/create/create.module';
import { CdpComponent } from './cdp/cdp.component';
import { ClearComponent } from './cdp/clear/clear.component';
import { DepositComponent } from './cdp/deposit/deposit.component';
import { IssueComponent } from './cdp/issue/issue.component';
import { WithdrawComponent } from './cdp/withdraw/withdraw.component';
import { CdpsRoutingModule } from './cdps-routing.module';
import { CdpsComponent } from './cdps.component';
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
