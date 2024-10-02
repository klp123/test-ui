import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { SharedService } from '../../../shared/service/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;
  showMessage = false;
  errorMessage = '';

  constructor(public router: Router, public toastr: ToastrService, private fb: FormBuilder, public authSvc: AuthenticationService, public sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitClicked = true;
    if (this.forgotPasswordForm.valid) {
      this.authSvc.forgotPassword(this.forgotPasswordForm.value).subscribe((response: any) => {
        if (response && response.status_code === 0) {
          this.updateMessage('success', 'Password reset link sent Successfull to your email');
          this.router.navigateByUrl('/auth/login');
          localStorage.clear();
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

  updateMessage(severity: string, message: string) {
    this.message[0].severity = severity;
    this.message[0].detail = message;
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  resetForm() {
    this.forgotPasswordForm.reset({
      email: ''
    });
    this.submitClicked = false;
  }


  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.forgotPasswordForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }
}
