import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{SharedModule} from '../shared/shared.module';



import { AuthService } from './services/auth.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class LandingModule { }
