import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyIssuesRoutingModule } from './my-issues-routing.module';
import { MyIssuesComponent } from './my-issues.component';

@NgModule({
  imports: [
    CommonModule,
    MyIssuesRoutingModule
  ],
  declarations: [MyIssuesComponent]
})
export class MyIssuesModule { }
