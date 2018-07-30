import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { ClientPortalRoutingModule } from './client-portal-routing.module';
import { ClientPortalComponent } from './client-portal.component';
import {IssueReportingModalComponent} from './issue-reporting-modal/issue-reporting-modal.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientPortalRoutingModule,
    SharedModule
  ],
  declarations: [ClientPortalComponent,
                IssueReportingModalComponent]
})
export class ClientPortalModule { }
