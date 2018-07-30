import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin-portal.component';
import {FeaturedIssuesComponent} from '../shared/featured-issues/featured-issues.component';

const routes: Routes = [{
  path:'',
  component:AdminPortalComponent,
  children:[{
    path:'',
    component:FeaturedIssuesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
