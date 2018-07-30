import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeaturedIssuesComponent} from './featured-issues/featured-issues.component';
import { IssueService } from './services/issue.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeaturedIssuesComponent],
  providers:[IssueService,AuthService]
})
export class SharedModule { }
