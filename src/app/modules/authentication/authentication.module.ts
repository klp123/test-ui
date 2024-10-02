import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ToastrModule } from 'ngx-toastr';

import { ButtonComponent } from '../shared/components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    PasswordModule,
    ToastrModule,
    SpinnerComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [LoginComponent]
})
export class AuthenticationModule { }
