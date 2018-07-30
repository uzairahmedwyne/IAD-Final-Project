import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './landing/services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
