import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import { SharedService } from '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss']
})
export class CreateEmailComponent implements OnInit {
  emailForm!: FormGroup;
  submitClicked = false;
  isLoading = false;
  description: any;
  filteredUsers = [];
  filteredConsultantData: any = [];

  constructor(private fb: FormBuilder, public toastr:ToastrService, public emailSvc: EmailService, public sharedSvc: SharedService) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      fromEmail: [localStorage.getItem('userEmail'), [Validators.required]],
      toEmail: ['', Validators.required],
      subject: ['', Validators.required],
      description: [''],
      toEmailReset: ['']
    });
  }

  showHideLoader() {
    this.isLoading = !this.isLoading;
  }

  onSearchEmail(event: any) {
    this.searchConsultant(event, 'consultant');
  }

  searchConsultant(event: any, type: string) {
    this.emailSvc.searchConsultant(event, type).subscribe((response: any) => {
      if (response && response.status_code === 0) {
        this.filteredUsers = response.users;
        this.prepareFilteredData(type);
      } else if (response && response.status_code === 1) {
        // this.updateMessage('error', response.message);
        // this.errorMessage = response.message;
      }
    }, (error: any) => {
      // this.updateMessage('error', 'Something went wrong');
    });
  }

  selectEvent(item: any) {
    this.emailForm.patchValue({ toEmail: item.email });
  }

  onFocused(e: any) {}

  prepareFilteredData(type: string) {
    this.filteredConsultantData = [];
    this.filteredUsers.forEach((element: any) => {
      if (type === 'consultant') {
        this.filteredConsultantData.push( {name: element.firstName + ' ' + element.lastName, id: element._id, email: element.email, phone: element.phone}); 
      }
    });
  }

  onSubmit(): void {
    this.showHideLoader();
    this.submitClicked = true;
    if (this.emailForm.valid) {
      this.emailForm.value.description = this.description;
     
      this.emailForm.value.fromEmail = this.sharedSvc.getLoggedInUserName() + ' <' + this.emailForm.value.fromEmail + '>';
      this.emailSvc.sendEmail(this.emailForm.value).subscribe((response: any) => {
        if (response && response.status_code === 0) {
          this.showHideLoader();
          this.resetForm();
          this.updateMessage('success', 'Email sent successfully');
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.showHideLoader();
        }
      });
    }
  }

  updateMessage(severity: string, message: string) {
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  resetForm() {
    this.emailForm.reset({
      fromEmail: '',
      toEmail: '',
      subject: '',
      description: '',
      toEmailReset: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.emailForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }
} 
