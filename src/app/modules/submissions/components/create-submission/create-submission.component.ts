import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmissionService } from '../../services/submission.service';
import { VendorService } from '../../../vendors/service/vendor.service';
import { ConsultantService } from '../../../consultants/services/consultant.service';
import { SharedService } from '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-submission',
  templateUrl: './create-submission.component.html',
  styleUrl: './create-submission.component.scss'
})
export class CreateSubmissionComponent {
  @Output() selectedActionEmitter: any = new EventEmitter();
  submissionForm!: FormGroup;
  checked = false;
  showMessage = false;
  isLoading = false;
  searchedName = '';
  keyword: any;
  errorMessage = '';
  userType = '';
  consultantId = null;
  vendorId = null;
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;
  filteredVendorData: any = [];
  filteredConsultantData: any = [];
  filteredUsers: any = [];
  filteredCompanyData: any = [];

  constructor(private fb: FormBuilder, private toastr: ToastrService, private sharedSvc: SharedService, private submissionService: SubmissionService, private vendorSvc: VendorService, public consultantSvc: ConsultantService) { }

  ngOnInit(): void {
    this.submissionForm = this.fb.group({
      consultantName: ['', Validators.required],
      consultantEmail: ['', Validators.required],
      consultantPhone: ['', Validators.required],
      vendorName: ['', Validators.required],
      vendorCompany: ['', Validators.required],
      vendorPhone: ['', Validators.required],
      implementationPartner: ['', Validators.required],
      endClient: ['', Validators.required],
      billRate: ['', Validators.required],
      jobLocation: ['', Validators.required],
      recruiterName: [''],
      recruiterId: [''],
      consultantResetName: [''],
      vendorResetName: [''],
      companyResetName: ['']
    });
    this.vendorSvc.addVendorEvent$.subscribe((data: any) => {
      if (data) {
        this.userType = 'vendor';
        this.selectEvent(data);
      }
    });
    this.consultantSvc.addConsultantEvent$.subscribe((data: any) => {
      if (data) {
        this.userType = 'consultant';
        this.selectEvent(data);
      }
    });
    this.disableVendorFields();
    // this.consultantSvc.addConsultantEvent$.subscribe((data: any) => {
    //   if (data) {
    //     this.userType = 'consultant';
    //     this.selectEvent(data);
    //   }
    // });
  }

  onSubmit(): void {
    this.showHideLoader();
    this.submitClicked = true;
    if (this.submissionForm.valid) {
      this.submissionService.createSubmission(this.prepareSubmissionPayload()).subscribe((response: any) => {
        if (response && response.status_code === 0) {
          this.updateMessage('success', 'Submission created successfully');
          this.resetForm();
          this.selectedActionEmitter.emit();
          this.processAfterSubmit();
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
          this.processAfterSubmit();
        }
        
      }, (error: any) => {
        this.updateMessage('error', 'Something went wrong');
      });
    }
  }

  processAfterSubmit() {
    setTimeout(() => {
      this.showHideLoader();
    }, 1000);
  }

  searchConsultant(event: any, type: string) {
    this.submissionService.searchConsultant(event, type).subscribe((response: any) => {
      this.userType = type;
      this.showMessage = true;
      if (response && response.status_code === 0) {
        this.filteredUsers = response.users;
        this.prepareFilteredData(type);
      } else if (response && response.status_code === 1) {
        this.updateMessage('error', response.message);
        this.errorMessage = response.message;
      }
    }, (error: any) => {
      this.updateMessage('error', 'Something went wrong');
    });
  }

  searchCompany(event: any, type: string) {
    this.submissionService.searchVendorCompany(event).subscribe((response: any) => {
      this.userType = type;
      this.showMessage = true;
      if (response && response.status_code === 0) {
        this.filteredUsers = response.companies;
        this.prepareFilteredData(type);
      } else if (response && response.status_code === 1) {
        this.updateMessage('error', response.message);
        this.errorMessage = response.message;
      }
    }, (error: any) => {
      this.updateMessage('error', 'Something went wrong');
    });
  }

  searchVendor(event: any, type: string) {
    this.submissionService.searchVendor(event, this.submissionForm?.value?.vendorCompany).subscribe((response: any) => {
      this.userType = type;
      this.showMessage = true;
      if (response && response.status_code === 0) {
        this.filteredUsers = response.vendors;
        this.prepareFilteredData(type);
      } else if (response && response.status_code === 1) {
        this.updateMessage('error', response.message);
        this.errorMessage = response.message;
      }
    }, (error: any) => {
      this.updateMessage('error', 'Something went wrong');
    });
  }

  prepareSubmissionPayload() {  
    let payload = {
      ...this.submissionForm.value,
      consultantId: this.consultantId,
      vendorId: this.vendorId,
      recruiterName: this.sharedSvc.getLoggedInUserName(),
      recruiterId: this.sharedSvc.getLoggedInUserId(),
      createdBy: this.sharedSvc.getLoggedInUserId()
    }

    return payload;
  }

  onSearchConsultant(event: any) {
    this.searchConsultant(event, 'consultant');
  }

  onSearchCompany(event: any) {
    this.searchCompany(event, 'company');
  }

  onSearchVendor(event: any) {
    this.searchVendor(event, 'vendor');
  }

  showHideLoader() {
    this.isLoading = !this.isLoading;
  }

  selectEvent(event: any) {
    const name = this.searchedName = event.firstName ? `${event.firstName} ${event.lastName}` : event.name;
    this.vendorId = event.id; 
  
    switch (this.userType) {
      case 'consultant':
        this.setConsultantValues(name, event);
        break;
      case 'vendor':
        this.setVendorValues(name, event);
        break;
      case 'company':
        this.setCompanyValues(event);
        break;
      default:
        console.warn('Unknown user type:', this.userType);
    }
  }
  
  private setConsultantValues(name: string, event: any) {
    this.consultantId = event.id;
    this.submissionForm.get('consultantName')?.setValue(name);
    this.submissionForm.get('consultantEmail')?.setValue(event.email);
    this.submissionForm.get('consultantPhone')?.setValue(event.phone);
  }
  
  private setVendorValues(name: string, event: any) {
    this.submissionForm.get('vendorName')?.setValue(name);
    this.submissionForm.get('vendorPhone')?.setValue(event.phone);
  }
  
  private setCompanyValues(event: any) {
    this.submissionForm.get('vendorCompany')?.setValue(event.name);
    this.enableVendorFields();
  }

  disableVendorFields() {
    this.submissionForm.get('vendorResetName')?.disable();
    this.submissionForm.get('vendorPhone')?.disable();
  }

  enableVendorFields() {
    this.submissionForm.get('vendorResetName')?.enable();
    this.submissionForm.get('vendorPhone')?.enable();
  }

  onClearCompany() {
    this.disableVendorFields();
  }
  
  updateMessage(severity: string, message: string) {
    this.message[0].severity = severity;
    this.message[0].detail = message;
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  prepareFilteredData(type: string) {
    this.filteredConsultantData = [];
    this.filteredVendorData = [];
    this.filteredCompanyData = [];
    this.filteredUsers.forEach((element: any) => {
      if (type === 'consultant') {
        this.filteredConsultantData.push( {name: element.firstName + ' ' + element.lastName, id: element._id, email: element.email, phone: element.phone});
      } else if (type === 'vendor') {
        this.filteredVendorData.push( {name: element.firstName + ' ' + element.lastName, id: element._id, email: element.email, phone: element.phone, company: element.company});
      } else if (type === 'company') {
        this.filteredCompanyData.push( {name: element.name, id: element._id, email: element.email, phone: element.phone, company: element.company});
      }
    });
  }

  onFocused(event: any) {}

  resetForm() {
    this.submissionForm.reset({
      consultantName: '',
      vendorName: '',
      vendorCompany: '',
      vendorPhone: '',
      implementationPartner: '',
      endClient: '',
      jobLocation: '',
      companyResetName: '',
      vendorResetName: '',
      consultantResetName: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.submissionForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }

  openAddConsultant() {
    this.submissionService.openAddConsultant();
  }

  openAddVendor() {
    this.submissionService.openAddVendor();
  }

  openAddCompany() {
    // this.submissionService.openAddCompany();
  }
}

