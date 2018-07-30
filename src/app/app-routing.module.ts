import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [{
  path:'',
  children:[{
    path:'',
    loadChildren:'./client-portal/client-portal.module#ClientPortalModule',
    canActivate:[AuthGuard]
  },{
    path:'landing',
    loadChildren:'./landing/landing.module#LandingModule'
  },{
    path:'admin-portal',
    loadChildren:'./admin-portal/admin-portal.module#AdminPortalModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
