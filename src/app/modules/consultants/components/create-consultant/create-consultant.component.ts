import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultantService } from '../../services/consultant.service';
import { SharedService } from '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-consultant',
  templateUrl: './create-consultant.component.html',
  styleUrl: './create-consultant.component.scss'
})
export class CreateConsultantComponent {

  @Input() editData: any;
  @Output() closeModal: any = new EventEmitter;
  consultantForm!: FormGroup;
  checked = false;
  isLoading = false;
  formData: any;
  selectedActualVisaStatus: any = '';
  selectedMarketingVisaStatus: any = '';
  showMessage = false;
  editForm = false
  errorMessage = '';
  marketingVisaStatus: any = [];
  actualVisaStatus: any = [];
  range = 'single';
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;

  constructor(private fb: FormBuilder, public toastr:ToastrService, private consultantSvc: ConsultantService, public sharedSvc: SharedService) { }


  ngOnInit(): void {
    this.actualVisaStatus = this.marketingVisaStatus = [
      { "name": "OPT", "code": "OPT" },
      { "name": "CPT", "code": "CPT" },
      { "name": "H1B", "code": "H1B" },
      { "name": "H4-EAD", "code": "H4-EAD" },
      { "name": "GCEAD", "code": "GCEAD" },
      { "name": "GC", "code": "GC" },
      { "name": "CITIZEN", "code": "CITIZEN" },
      { "name": "L1", "code": "L1" },
      { "name": "L2", "code": "L2" },
      { "name": "TN", "code": "TN" }
    ]
    ;
    this.consultantForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      alternatePhone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      skills: [[], Validators.required],
      totalExp: ['', Validators.required],
      type: ['1001'],
      marketingExp: ['', Validators.required],
      marketingVisa: ['', Validators.required],
      marketingPhone: ['', Validators.required],
      marketingEmail: ['', Validators.required],
      marketingLinkedIn: ['', Validators.required], 
      whatsaapNum: ['', Validators.required],
      totalExperience: ['', Validators.required],
      prevCompanies: [[], Validators.required],
      currentLocation: ['', Validators.required],
      preferredlocations: [[], Validators.required],
      actualVisaStatus: ['', Validators.required],
      realTimeExp: ['', Validators.required],
      marketingStartDate: ['', Validators.required],
      comments: ['', Validators.required],
      resume: ['']
    });

    this.sharedSvc.resetFormData$.subscribe((response: any) => {
      if (response) {
        this.resetFormData();
      }
    });
  }

  ngOnChanges(): void {
    if (this.editData && this.editData.email) {
      this.editForm = true;
      if(this.editData.skills?.length) {
        this.editData.skills = this.editData.skills.split(',');
      }
      if(this.editData.prevCompanies?.length) {
        this.editData.skills = this.editData.prevCompanies.split(',');
      }
      if(this.editData.preferredlocations?.length) {
        this.editData.skills = this.editData.preferredlocations.split(',');
      }
      this.consultantForm.controls['email'].disable();
      this.patchForm();
    } else {
      // this.resetForm();
      this.editForm = false;
     // this.consultantForm.controls['email'].enable();
    }
  }

  resetFormData(){
    this.resetForm();
  }


  patchForm() {
    if (this.editData) {
      this.consultantForm.patchValue({
        firstName: this.editData.firstName,
        lastName: this.editData.lastName,
        email: this.editData.email,
        phone: this.editData.phone,
        alternatePhone: this.editData.alternatePhone,
        city: this.editData.city,
        state: this.editData.state,
        skills: this.editData.skills || [],
        totalExp: this.editData.totalExp,
        marketingExp: this.editData.marketingExp,
        marketingVisa: this.editData.marketingVisa,
        marketingPhone: this.editData.marketingPhone,
        marketingEmail: this.editData.marketingEmail,
        marketingLinkedIn: this.editData.marketingLinkedIn,
        whatsaapNum: this.editData.whatsaapNum,
        prevCompanies: this.editData.prevCompanies || [],  
        currentLocation: this.editData.currentLocation,
        preferredlocations: this.editData.preferredlocations || [], 
        actualVisaStatus: this.editData.actualVisaStatus,
        realTimeExp: this.editData.realTimeExp,
        marketingStartDate: this.editData.marketingStartDate,
        comments: this.editData.comments
      });
    }
  }

  async onSubmit() {
    this.submitClicked = true;
    if (this.consultantForm.valid) {
      this.consultantSvc.createConsultant(this.preparePayload()).subscribe((response: any) => {
        this.showMessage = true;
        if (response && response.status_code === 0) {
          this.addConsultant(response.newUser);
          this.updateMessage('success', 'Consultant created successfully');
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

  preparePayload() {
    let payload = { 
      createdBy: localStorage.getItem('userId'), 
      type: '1001',
      ...this.consultantForm.value 
    };
    return payload;
  }

  storeFile(event: any) {
    this.formData = new FormData();
    this.formData.append('file', event.target.files[0]);
  }

  uploadFile() {
    this.showhideSpinner();
    if (this.editData && this.editData.email) {
      this.updateConsultant();
    }
    this.submitClicked = true;
    this.consultantForm.value.type = '1001';
    if (this.consultantForm.valid) {
      this.consultantSvc.fileUpload(this.formData).subscribe((response: any) => {
        this.showMessage = true;
        if (response && response.status_code === 0) {
          this.consultantForm.patchValue({ resume: response.fileName });
          this.onSubmit();
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
        }
        this.showhideSpinner();
      }, (error: any) => {
        this.updateMessage('error', 'Something went wrong');
      });
    }
  }

  updateConsultant() {
    this.showhideSpinner();
    let payload = { _id: this.editData._id, ...this.consultantForm.value };
    this.consultantSvc.updateConsultant(payload).subscribe((response: any) => {
      this.showMessage = true;
      this.showhideSpinner();
      if (response && response.status_code === 0) {
        this.addConsultant(response.updatedUser);
        this.updateMessage('success', 'Consultant updated successfully');
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

  onSelectMarketingStartDate(date: any) {
    this.consultantForm.patchValue({ 'marketingStartDate': date.start_date });
  }

  updateMessage(severity: string, message: string) {
    this.message[0].severity = severity;
    this.message[0].detail = message;
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  showhideSpinner(){
    this.isLoading = !this.isLoading;
  }

  resetForm() {
    this.consultantForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      skills: [],
      totalExp: '',
      alternatePhone: '',
      city: ''
    });
    this.submitClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.consultantForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }

  addConsultant(consultantResp: any) {
    this.consultantSvc.addConsultant(consultantResp);
  }
}