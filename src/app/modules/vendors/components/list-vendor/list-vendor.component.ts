import { Component, OnInit } from '@angular/core';

import { VendorService } from '../../service/vendor.service';
import { SharedService } from '../../../shared/service/shared.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrl: './list-vendor.component.scss'
})
export class ListVendorComponent implements OnInit {
  showAddVendor = false;
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

  constructor(private vendorSvc: VendorService, public sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.loggedInUserId = this.sharedSvc.getLoggedInUserId();
    this.loggedInUserType = this.sharedSvc.getLoggedInUserType();
    if (this.loggedInUserType === 'admin') {
      this.showDelete = true;
    }
    this.getTableConfigs();
    this.getVendors({});
    this.sharedSvc.appliedGroupBy$.subscribe((event: string) => {
      if (event) {
        this.groupBy = event;
      }
    });
  }

  onSelectAction(event: any) {
    this.vendorId = event.id;
    if (event.action === "edit") {
      this.showAddVendor = true;
      this.editData = event.data;
    } else if (event.action === "confirmDelete") {
      this.updateVendorById({ '_id': this.vendorId, 'status': 'DELETED' });
    }
  }

  closeModal() {
    this.showAddVendor = false;
    this.getVendors({});
  }

  selectSubStatus(status: string) {
    this.subStatus = status;
  }

  onSelectUpdateValues(event: any) {
    this.selectedUpdateVal = event;
  }

  addNew() {
    this.showAddVendor = true;
    this.sharedSvc.resetFormDataEvent();
  }

  downloadExcel() {

  }

  updateSubmission() {
    let toUpdateObj = { 'id': this.vendorId, 'status': this.selectedUpdateVal.toUpperCase(), 'subStatus': this.subStatus.toUpperCase() };
    this.updateVendorById(toUpdateObj);
  }

  editSubmission() {
  }

  createVendor() {
    this.getVendors({});
    this.showAddVendor = false;
  }

  deleteSubmission() { }

  updateStatus() { }

  resetFilters() {
    this.groupBy = '';
    this.getVendors({});
  }

  onGlobalSearch(searchStr: string) {
    this.getVendors({ 'searchStr': searchStr });
  }

  selectedDateRange(dates: any) {
    dates.start_date = new Date(dates.start_date);
    dates.end_date = new Date(dates.end_date);
    this.getVendors(dates);
  }

  getVendors(filters: any) {
    if (this.loggedInUserType === 'benchSaleRecruiter' || this.loggedInUserType === 'teamLead') {
      filters.loggedInUserId = this.sharedSvc.getLoggedInUserId();
    }
    this.vendorSvc.getAllVendors(filters).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.data = this.prepareResponse(response.vendorsList);
        } else if (response && response.status_code === 1) {
          console.log(response.message);
        }
      },
      (error: any) => {
        console.log("Something went wrong");
      }
    );
  }

  updateVendorById(toUpdateData: any) {
    this.vendorSvc.updateVendor(toUpdateData).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.getVendors({});
          this.showAddVendor = false;
        } else if (response && response.status_code === 1) {
          console.log(response.message);
        }
      },
      (error: any) => {
        console.log("Something went wrong");
      }
    );
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
