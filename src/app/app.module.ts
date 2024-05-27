import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './featuers/authModule/register/register.component';
import { LoginComponent } from './featuers/authModule/login/login.component';
import { ForgetPassComponent } from './featuers/authModule/forget-pass/forget-pass.component';
import { ResetPassComponent } from './featuers/authModule/reset-pass/reset-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPassComponent,
    ResetPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
