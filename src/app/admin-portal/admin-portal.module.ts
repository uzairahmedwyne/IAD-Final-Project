import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    SharedModule
  ],
  declarations: [AdminPortalComponent]
})
export class AdminPortalModule { }
