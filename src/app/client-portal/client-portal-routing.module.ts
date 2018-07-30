import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientPortalComponent} from './client-portal.component';
import{FeaturedIssuesComponent} from '../shared/featured-issues/featured-issues.component';

const routes: Routes = [{
  path:'',
  component:ClientPortalComponent,
  children:[{
    path:'',
    component:FeaturedIssuesComponent
  },{
    path:'my-issues',
    loadChildren:'./my-issues/my-issues.module#MyIssuesModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }
