import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../service/authentication.service';
import { SharedService } from  '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  responseData: any;
  errorMessage = '';
  isLoading = false;
  showMessage = false;
  submitClicked = false;
  showLogin = true;
  message: any = [{ severity: '', detail: '' }];
  constructor(public router: Router, public toastr: ToastrService, private fb: FormBuilder, public authSvc: AuthenticationService, public sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showHideSpinner() {
    this.isLoading = !this.isLoading;
  }

  onSubmit() {
    this.submitClicked = true;
    // this.router.navigateByUrl('/submissions');
    if (this.loginForm.valid) {
      this.authSvc.login(this.loginForm.value).subscribe((response: any) => {
        if (response && response.status_code === 0) {
          localStorage.setItem('userId', response.user?._id);
          this.resetForm();
          if (response.user?.isPasswordUpdated === false) {
            this.showLogin = false;
            setTimeout(() => {
              location.reload();
            }, 3000);
            this.router.navigateByUrl('/auth/reset-password');
          } else {
            this.updateMessage('success', 'Login Successfull');
            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(response.user));
            localStorage.setItem('userId', JSON.stringify(response.user?._id));
            this.router.navigateByUrl('/submissions');
            this.sharedSvc.logInUser(true);
          }
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
        }
      },
      error => {
        console.error('Error fetching data:', error);
      });
    }
  }

  updatePassword() {

  }

  updateMessage(severity: string, message: string) {
    severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
  }

  resetForm() {
    this.loginForm.reset({
      email: '',
      password: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.loginForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }
}
