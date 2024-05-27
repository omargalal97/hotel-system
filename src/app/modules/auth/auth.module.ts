import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
