import { Component, EventEmitter, Input, Output, OnInit, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecruiterService } from '../../services/recruiter.service';
import { SharedService } from '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-recruiter',
  templateUrl: './create-recruiter.component.html',
  styleUrl: './create-recruiter.component.scss'
})
export class CreateRecruiterComponent implements OnInit, OnChanges {
  @Input() editData: any;
  @Output() closeModal: any = new EventEmitter;
  
  recruiterForm!: FormGroup;
  checked = false;
  editForm = false;
  showMessage = false;
  errorMessage = '';
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;

  constructor(private fb: FormBuilder, public toastr: ToastrService, private sharedSvc: SharedService, private vendorService: RecruiterService) { }

  ngOnInit(): void {
    this.recruiterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      alternatePhone: ['', Validators.required]
    });

    this.sharedSvc.resetFormData$.subscribe((response: any) => {
      if (response) {
        this.resetForm();
      }
    });
  }

  ngOnChanges(): void {
    if (this.editData && this.editData.email) {
      this.editForm = true;
      this.recruiterForm.controls['email'].disable();
      this.patchForm();
    } else {
     // this.resetForm();
      this.editForm = false;
      // this.recruiterForm.controls['email'].enable();
    }
  }

  patchForm() {
    this.recruiterForm.patchValue({
      firstName: this.editData.firstName,
      lastName: this.editData.lastName,
      email: this.editData.email,
      phone: this.editData.phone,
      alternatePhone: this.editData.alternatePhone,
    })
  }

  onSubmit(): void {
    if (this.editForm) {
      this.updateRecruiter();
      return;
    }
    this.submitClicked = true;
    if (this.recruiterForm.valid) {
      this.vendorService.createRecruiter(this.preparePayload()).subscribe((response: any) => {
        this.showMessage = true;
        if (response && response.status_code === 0) {
          this.updateMessage('success', 'Recruiter created successfully');
          this.resetForm();
          this.closeModal.emit();
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.updateMessage('error', 'Something went wrong');
      });
    }
  }

  updateRecruiter() {
    let payload = { _id: this.editData._id, ...this.recruiterForm.value };
    this.vendorService.updateRecruiter(payload).subscribe((response: any) => {
      this.showMessage = true;
      if (response && response.status_code === 0) {
        this.updateMessage('success', 'Recruiter updated successfully');
        this.resetForm();
        this.closeModal.emit();
      } else if (response && response.status_code === 1) {
        this.updateMessage('error', response.message);
        this.errorMessage = response.message;
      }
    }, (error: any) => {
      this.updateMessage('error', 'Something went wrong');
    });
  }

  updateMessage(severity: string, message: string) {
    this.message[0].severity = severity;
    this.message[0].detail = message;
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  preparePayload() {  
    let payload = {
      ...this.recruiterForm.value,
      password: 'test1234',
      type: '1002',
      createdBy: this.sharedSvc.getLoggedInUserId()
    }

    return payload;
  }

  resetForm() {
    this.recruiterForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.recruiterForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }
}