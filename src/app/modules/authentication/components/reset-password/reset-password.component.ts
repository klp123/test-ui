import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { SharedService } from '../../../shared/service/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm!: FormGroup;
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;
  showMessage = false;
  errorMessage = '';

  constructor(public router: Router, public toastr: ToastrService, private fb: FormBuilder, public authSvc: AuthenticationService, public sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    this.submitClicked = true;
    if (this.resetPasswordForm.valid) {
      let payload = {
        password: this.resetPasswordForm.value.password,
        isPasswordUpdated: true,
        _id: localStorage.getItem('userId')
      }
      this.authSvc.updateUser(payload).subscribe((response: any) => {
        if (response && response.status_code === 0) {
          this.updateMessage('success', 'Password updated Successfull');
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
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);this.showMessage = false;
    }, 1000);
  }

  resetForm() {
    this.resetPasswordForm.reset({
      email: '',
      password: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.resetPasswordForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }
}
