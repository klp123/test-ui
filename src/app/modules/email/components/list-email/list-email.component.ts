import { Component } from '@angular/core';
import { SharedService } from '../../../shared/service/shared.service';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-list-email',
  templateUrl: './list-email.component.html',
  styleUrl: './list-email.component.scss'
})
export class ListEmailComponent {
  showAddEmail = false;
  subStatus = '';
  vendorId = '';
  tableWidth = '';
  selectedUpdateVal: string = '';
  data: any = [];
  rows: any =[];
  columns:any = [];
  groupBy: string = '';
  loggedInUserId: any = '';
  loggedInUserType: any = '';
  showDelete = false;
  editData = {};
  groupByValues: any = [];
  toUpdateStatusValues: any = [ ];
  updateValuesList: any = ['screening', 'implementation', 'endClient'];

  constructor(public sharedSvc: SharedService, public emailSvc: EmailService ) { 
    this.getTableConfigs();
  }

  closeModal() {
    this.showAddEmail = false;
    this.getEmails({});
  }

  selectSubStatus(status: string) {
    this.subStatus = status;
  }

  onSelectUpdateValues(event: any) {
    this.selectedUpdateVal = event;
  }

  addNew() {
    this.showAddEmail = true;
    this.sharedSvc.resetFormDataEvent();
  }

  downloadExcel() {

  }

  updateSubmission() {
    let toUpdateObj = { 'id': this.vendorId, 'status': this.selectedUpdateVal.toUpperCase(), 'subStatus': this.subStatus.toUpperCase() };
  }

  editSubmission() {
  }

  createVendor() {
    this.getEmails({});
    this.showAddEmail = false;
  }

  deleteSubmission() { }

  updateStatus() { }

  resetFilters() {
    this.groupBy = '';
    this.getEmails({});
  }

  onGlobalSearch(searchStr: any) {
    this.getEmails({ 'searchStr': searchStr });
  }

  selectedDateRange(dates: any) {
    dates.start_date = new Date(dates.start_date);
    dates.end_date = new Date(dates.end_date);
    this.getEmails(dates);
  }

  getEmails(filters: any) {
    if (this.loggedInUserType === 'benchSaleRecruiter' || this.loggedInUserType === 'teamLead') {
      filters.loggedInUserId = this.sharedSvc.getLoggedInUserId();
    }
    // this.emailSvc.getAllEmails(filters).subscribe(
    //   (response: any) => {
    //     if (response && response.status_code === 0) {
    //       this.data = this.prepareResponse(response.vendorsList);
    //     } else if (response && response.status_code === 1) {
    //       console.log(response.message);
    //     }
    //   },
    //   (error: any) => {
    //     console.log("Something went wrong");
    //   }
    // );
  }

  prepareResponse(data: any) {
    data.forEach((element: any, index: number) => {
      element.id = index;
      element.name = element.firstName + ' ' + element.lastName;
      if (element && element.notes) {
        element.subNotes = element.notes.substring(0, 15) + '...';
      }
    });
    return data;
  }

  onSelectAction(event: any) {}

  getTableConfigs() {
    this.sharedSvc.getTableHeaders('vendor/vendor').subscribe((data: any) => {
      if (data) {
        this.columns = data.columns;
        this.rows = data.rows;
        this.toUpdateStatusValues = data.toUpdateStatusValues;
        this.groupByValues = data.groupByValues;
        this.tableWidth = data.tableWidth;
      }
    })
  }
}
