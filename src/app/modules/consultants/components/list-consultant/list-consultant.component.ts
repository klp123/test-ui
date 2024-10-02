import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { ConsultantService } from '../../services/consultant.service'; 
import { SharedService } from '../../../shared/service/shared.service';

@Component({
  selector: 'app-list-consultant',
  templateUrl: './list-consultant.component.html',
  styleUrl: './list-consultant.component.scss'
})
export class ListConsultantComponent implements OnInit {
  visible = false;
  showAddConsultant = false;
  showNotes = false;
  isLoading = false;
  notes = '';
  subStatus = '';
  consultantId = '';
  tableWidth = '';
  selectedUpdateVal: string = '';
  editData: any = {};
  data: any = [];
  rows: any =[];
  columns: any = [];
  groupBy: string = '';
  loggedInUserType: any = '';
  headerText = 'Create Consultant';
  groupByValues: any = [];
  toUpdateStatusValues: any = [ ];
  updateValuesList: any = ['screening', 'implementation', 'endClient'];

  constructor(private consultantSvc: ConsultantService, public sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.getTableConfigs();
    this.getConsultants({});
    this.sharedSvc.appliedGroupBy$.subscribe((event: string) => {
      if (event) {
        this.groupBy = event;
      }
    });
    this.loggedInUserType = this.sharedSvc.getLoggedInUserType();
  }

  onSelectAction(event: any) {
    this.consultantId = event.id;
    if (event.action === "edit") {
      this.editData = event.data;
      this.headerText = 'Edit Consultant';
      this.showAddConsultant = true;
    } else if (event.action === "view") {
      this.editData = event.data;
    } else if (event.action === "notes") {
      this.showNotes = true;
      this.notes = event.notes;
    } else if (event.action === "confirmDelete") {
      this.updateConslutantById({ '_id': this.consultantId, 'status': 'DELETED' });
    }
  }

  showHideSpinner() {
    this.isLoading = !this.isLoading;
  }

  selectSubStatus(status: string) {
    this.subStatus = status;
  }

  downloadExcel(){}

  onSelectUpdateValues(event: any) {
    this.selectedUpdateVal = event;
  }

  updateConsultant(notes: string) {
    let toUpdateObj = { '_id': this.consultantId, 'status': this.selectedUpdateVal.toUpperCase(), 'subStatus': this.subStatus.toUpperCase() };
    this.updateConslutantById(toUpdateObj);
  }

  editSubmission() {
  }

  showDialog() {
    this.visible = true;
  }

  deleteSubmission() { }

  updateStatus() { }

  onCloseModal() {
    this.showAddConsultant = false;
    this.getConsultants({});
  }

  resetFilters() {
    this.groupBy = '';
    this.getConsultants({});
  }

  onGlobalSearch(searchStr: string) {
    this.getConsultants({ 'searchStr': searchStr });
  }

  selectedDateRange(dates: any) {
    dates.start_date = new Date(dates.start_date);
    dates.end_date = new Date(dates.end_date);
    this.getConsultants(dates);
  }

  getConsultants(filters: any) {
    filters.type = '1001';
    if (this.loggedInUserType === 'benchSale-recruiter') {
      filters.loggedInUserId = this.sharedSvc.getLoggedInUserId();
    }
    this.consultantSvc.getAllConsultants(filters).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.data = this.prepareResponse(response.userDetails);
        } else if (response && response.status_code === 1) {
          console.log(response.message);
        }
      },
      (error: any) => {
        console.log("Something went wrong");
      }
    );
  }

  updateConslutantById(toUpdateData: any) {
    this.showHideSpinner();
    this.consultantSvc.updateConsultant(toUpdateData).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.getConsultants({});
          this.showHideSpinner();
          this.visible = false;
        } else if (response && response.status_code === 1) {
          console.log(response.message);
          this.showHideSpinner();
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
      if (element.skills && element.skills.length) {
        element.skills = element.skills.map((skill: any) => skill.value).join(',');
      }
      if (element.prevCompanies && element.prevCompanies.length) {
        element.prevCompanies = element.prevCompanies.map((prevCompanies: any) => prevCompanies.value).join(',');
      }
      if (element.preferredlocations && element.preferredlocations.length) {
        element.preferredlocations = element.preferredlocations.map((preferredlocations: any) => preferredlocations.value).join(',');
      }
      element.name = element.firstName + ' ' + element.lastName;
      if (element && element.notes) {
        element.subNotes = element.notes.substring(0, 15) + '...';
      }
      if (element && element.marketingLinkedIn) {
        element.marketingLinkedIn = element.marketingLinkedIn.substring(0, 15) + '...';
      }
    });
    return data;
  }

  addNew() {
    this.showAddConsultant = true;
    this.sharedSvc.resetFormDataEvent();
    this.headerText = 'Create Consultant';
  }

  getTableConfigs() {
    this.sharedSvc.getTableHeaders('consultant/consultant').subscribe((data: any) => {
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
