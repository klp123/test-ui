import { Component } from '@angular/core';

import { RecruiterService } from '../../services/recruiter.service';
import { SharedService } from '../../../shared/service/shared.service';

@Component({
  selector: 'app-list-recruiter',
  templateUrl: './list-recruiter.component.html',
  styleUrl: './list-recruiter.component.scss'
})
export class ListRecruiterComponent {
  visible = false;
  showAddRecruiter = false;
  subStatus = '';
  recruiterId = '';
  tableWidth = '';
  selectedUpdateVal: string = '';
  headerText = 'Create Recruiter';
  editData = {};
  data: any = [];
  rows: any =[];
  columns:any = [];
  groupBy: string = '';
  groupByValues: any = [];
  toUpdateStatusValues: any = [ ];
  updateValuesList: any = ['screening', 'implementation', 'endClient'];

  constructor(private recruiterSvc: RecruiterService, public sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.getTableConfigs();
    this.getConsultants({});
    this.sharedSvc.appliedGroupBy$.subscribe((event: string) => {
      if (event) {
        this.groupBy = event;
      }
    });
  }

  onSelectAction(event: any) {
    this.recruiterId = event.id;
    if (event.action === "edit") {
      this.headerText = 'Edit Recruiter';
      this.editData = event.data;
      this.showAddRecruiter = true;
    } else if (event.action === "confirmDelete") {
      this.updateRecruiterById({ '_id': this.recruiterId, 'status': 'DELETED' });
    }
  }

  selectSubStatus(status: string) {
    this.subStatus = status;
  }

  onSelectUpdateValues(event: any) {
    this.selectedUpdateVal = event;
  }

  updateSubmission() {
    let toUpdateObj = { 'id': this.recruiterId, 'status': this.selectedUpdateVal.toUpperCase(), 'subStatus': this.subStatus.toUpperCase() };
    this.updateRecruiterById(toUpdateObj);
  }

  editSubmission() {
  }

  showDialog() {
    this.visible = true;
  }

  deleteSubmission() { }

  updateStatus() { }

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

  downloadExcel() {

  }

  addNew() {
    this.editData = {};
    this.showAddRecruiter = true;
    this.sharedSvc.resetFormDataEvent();
    this.headerText = 'Create Recruiter';
  }

  closeModal() {
    this.showAddRecruiter = false;
    this.getConsultants({});
  }

  getConsultants(filters: any) {
    filters.type = '1002';
    this.recruiterSvc.getAllRecruiters(filters).subscribe(
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

  updateRecruiterById(toUpdateData: any) {
    this.recruiterSvc.updateRecruiter(toUpdateData).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.getConsultants({});
          this.visible = false;
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
    this.sharedSvc.getTableHeaders('recruiter/recruiter').subscribe((data: any) => {
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
