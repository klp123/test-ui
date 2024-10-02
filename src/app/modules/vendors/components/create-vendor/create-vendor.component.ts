import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../../service/vendor.service';
import { SharedService } from '../../../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {
  @Input() editData: any;
  @Output() vendorCreated = new EventEmitter<any>();
  @Output() closeModal: any = new EventEmitter;

  vendorForm!: FormGroup;
  companyForm!: FormGroup;
  checked = false;
  editForm = false;
  showMessage = false;
  showAddCompanyModel = false;
  errorMessage = '';
  filteredCompanyData: any = [];
  filteredCompanies: any = [];
  message: any = [{ severity: '', detail: '' }];
  submitClicked = false;
  submitCompanyClicked = false;
  
  constructor(private fb: FormBuilder, public toastr: ToastrService, private vendorService: VendorService, public sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      careerURL: ['', Validators.required],
      website: ['', Validators.required],
      alternatePhone: ['', Validators.required],
      companyId: ['', Validators.required],
      companyResetName: ['']
    });

    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      website: ['', Validators.required],
      careerURL: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.sharedSvc.resetFormData$.subscribe((response: any) => {
      if (response) {
        this.resetForm();
        this.resetCompanyForm();
      }
    });
  }

  ngOnChanges(): void {
    if (this.editData && this.editData.email) {
      this.editForm = true;
      this.vendorForm.controls['email'].disable();
      this.patchForm();
    } else {
     // this.resetForm();
      this.editForm = false;
      // this.recruiterForm.controls['email'].enable();
    }
  }

  patchForm() {
    this.vendorForm.patchValue({
      firstName: this.editData.firstName,
      lastName: this.editData.lastName,
      email: this.editData.email,
      phone: this.editData.phone,
      company: this.editData.company,
      careerURL: this.editData.careerURL,
      website: this.editData.website,
      alternatePhone: this.editData.alternatePhone,
      companyId:  this.editData.companyId,
      companyResetName: this.editData.company
    })
  }

  onSubmit(): void {
    if (this.editForm) {
      this.updateVendor();
      return;
    }
    this.submitClicked = true;
    if (this.vendorForm.valid) {
      let payload = { createdBy: localStorage.getItem('userId'), ...this.vendorForm.value };
      this.vendorService.createVendor(payload).subscribe((response: any) => {
        this.showMessage = true;
        if (response && response.status_code === 0) {
          this.updateMessage('success', 'Company created successfully');
          this.resetForm();
          this.vendorCreated.emit();
        } else if (response && response.status_code === 1) {
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.updateMessage('error', 'Something went wrong');
      });
    }
  }

  onSubmitCompany(): void {
    this.submitCompanyClicked = true;
    if (this.companyForm.valid) {
      let payload = {
        createdBy: localStorage.getItem('userId'), 
        ...this.companyForm.value
      }
      this.vendorService.createCompany(payload).subscribe((response: any) => {
        this.showMessage = true;
        if (response && response.status_code === 0) {
          this.showAddCompanyModel = false;
          this.updateVendorForm(response.newCompany);
          this.updateMessage('success', 'Company created successfully');
          this.resetCompanyForm();
        } else if (response && response.status_code === 1) {
          this.resetCompanyForm();
          this.showAddCompanyModel = false;
          this.updateMessage('error', response.message);
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.updateMessage('error', 'Something went wrong');
      });
    }
  }

  updateVendor() {
    let payload = { _id: this.editData._id, ...this.vendorForm.value };
    this.vendorService.updateVendor(payload).subscribe((response: any) => {
      this.showMessage = true;
      if (response && response.status_code === 0) {
        this.updateMessage('success', 'Vendor updated successfully');
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


  updateVendorForm(company: any) {
    this.vendorForm.patchValue({ company: company.name, website: company.website, companyURL: company.companyURL, companyId: company._id || company.id, careerURL: company.careerURL });
  }

  updateMessage(severity: string, message: string) {
    this.message[0].severity = severity;
    this.message[0].detail = message;
    setTimeout(() => {
      severity === 'success' ? this.toastr.success(message) : this.toastr.error(message);
    }, 1000);
  }

  resetForm() {
    this.vendorForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      careerURL: '',
      website: '',
      address: '',
      alternatePhone: '',
      companyResetName: '',
      companyId: '',
      client: '',
      companyForm: ''
    });
    this.submitClicked = false;
  }

  resetCompanyForm() {
    this.companyForm.reset({
      name: '',
      website: '',
      websiteURL: '',
      address: '',
      createdBy: ''
    });
    this.submitCompanyClicked = false;
  }

  isInputfieldInValid(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.vendorForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }

  isInputfieldInValidCompany(inputName: string) {
    let toReturnFlag = false;
    if (this.submitClicked && this.companyForm.get(inputName)?.invalid) {
      toReturnFlag = true;
    }
    return toReturnFlag;
  }

  addVendor(vendorResp: any) {
    this.vendorService.addVendor(vendorResp);
  }

  onSearchCompany(event: any) {
    this.vendorService.searchCompany(event).subscribe((response: any) => {
      if (response && response.status_code === 0) {
        this.filteredCompanies = response.companies;
        this.prepareFilteredData();
      } else if (response && response.status_code === 1) {
        this.updateMessage('error', response.message);
        this.errorMessage = response.message;
      }
    }, (error: any) => {
      this.updateMessage('error', 'Something went wrong');
    });
  }

  selectEvent(event: any) {
    this.updateVendorForm(event)
  }

  onFocused(event: any) {

  }

  openAddConsultant() {
    this.showAddCompanyModel = true;
  }

  onClearCompany() {
    this.vendorForm.patchValue({ company: '', website: '', companyURL: '', companyId: '' });
  }

  prepareFilteredData() {
    this.filteredCompanyData = [];
    this.filteredCompanies.forEach((element: any) => {
      this.filteredCompanyData.push( {name: element.name , id: element._id, website: element.website, careerURL: element.careerURL});
    });
  }
}