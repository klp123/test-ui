import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { SubmissionService } from "../../services/submission.service";
import { SharedService } from "../../../shared/service/shared.service";
import { VendorService } from "../../../vendors/service/vendor.service";
import { ConsultantService } from "../../../consultants/services/consultant.service";

@Component({
  selector: "app-list-submission",
  templateUrl: "./list-submission.component.html",
  styleUrls: ["./list-submission.component.scss"], // Corrected here
})
export class ListSubmissionComponent implements OnInit {
  @Output() selectedActionEmitter: any = new EventEmitter();
  showTimeline = false;
  showSubmissionUpdate = false;
  showAddSubmisson = false;
  showNotes = false;
  isLoading = false
  showAddConsultantOrVendor = false;
  subModalName = 'Consultant';
  filters: any;
  notes = '';
  subStatus = '';
  submissionId = '';
  tableWidth = '';
  selectedUpdateVal: string = '';
  data: any = [];
  submissionsCount: any = [];
  rows: any =[];
  columns:any = [];
  groupBy: string = '';
  groupByValues: any =[];
  toUpdateStatusValues: any = [];
  statusTimeLine: any = [];
  items: any = [
    {
        icon: 'pi pi-plus',
        tooltipOptions: {
          tooltipLabel: 'Add'
      },
        command: () => {
         this.addNew();
        }
    },
    {
        icon: 'pi pi-download',
        tooltipOptions: {
          tooltipLabel: 'Download xlxs'
      },
      command: () => {
        this.downloadExcel();
       }
    }
];
  updateValuesList: any = ['Screening-round', 'Implementation-partner round', 'End-client round'];

  constructor(private submissionService: SubmissionService, public sharedSvc: SharedService, public vendorSvc: VendorService, public consultantSvc: ConsultantService) { }

  ngOnInit(): void {
    this.getTableConfigs();
    this.getSubmissions({});
    this.sharedSvc.appliedGroupBy$.subscribe((event: string) => {
      if (event) {
        this.groupBy = event;
        let groupByEvent = this.groupByValues.filter((data: any) => data.name === event);
        this.filters.groupBy = groupByEvent[0].code;
        this.getSubmissions(this.filters);
      }
    });
    this.submissionService.addConsultant$.subscribe((event: any) => {
      if (event) {
        this.showAddConsultantOrVendor = true;
        this.subModalName = 'Consultant';
      }
    });
    this.submissionService.addVendor$.subscribe((event: any) => {
      if (event) {
        this.showAddConsultantOrVendor = true;
        this.subModalName = 'Vendor';
      }
    });
    this.vendorSvc.addVendorEvent$.subscribe((data: any) => {
      if (data) {
        this.showAddConsultantOrVendor = false;
      }
    });
    this.consultantSvc.addConsultantEvent$.subscribe((data: any) => {
      if (data) {
        this.showAddConsultantOrVendor = false;
      }
    });
  }

  onSelectAction(event: any) {
    this.submissionId = event.id;
    if (event.action === "edit") {
      this.showSubmissionUpdate = true;
    } else if (event.action === "view") {
      this.showTimeline = true;
      this.statusTimeLine = event.timelineData.slice().reverse();
    } else if (event.action === "notes") {
      this.showNotes = true;
      this.notes = event.notes;
    }
  }

  selectSubStatus(status: string) {
    this.subStatus = status;
  }

  onSelectUpdateValues(event: any) {
    this.selectedUpdateVal = event;
  }

  updateSubmission(type: string) {
    let toUpdateObj = {};
    if (type === 'status') {
      toUpdateObj =  { 'id': this.submissionId, 'status': this.selectedUpdateVal.toUpperCase(), 'subStatus': this.subStatus.toUpperCase(), 'statusTimeLine': this.prepareStatusTimelineUpdateData() };
    } else {
      toUpdateObj =  { 'id': this.submissionId, 'notes': this.notes };
    }
    this.updateSubmissionById(toUpdateObj);
  }

  prepareStatusTimelineUpdateData() {
    let statusTimeLineData = {
      status: this.selectedUpdateVal.toUpperCase(),
      subStatus: this.subStatus.toUpperCase(),
      timeStamp: new Date()
    }
    this.statusTimeLine.push(statusTimeLineData);
    return this.statusTimeLine;
  }

  editSubmission() {
  }

  showDialog() {
    this.showSubmissionUpdate = true;
  }

  deleteSubmission() { }

  updateStatus() { }

  selectedDateRange(dates: any) {
    dates.start_date = new Date(dates.start_date);
    dates.end_date = new Date(dates.end_date);
    this.getSubmissions(dates);
  }

  resetFilters() {
    this.groupBy = '';
    this.getSubmissions({});
  }

  onGlobalSearch(searchStr: string) {
    this.getSubmissions({ 'searchStr': searchStr });
  }

  showHideLoader() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  }

  downloadExcel() {
    this.showHideLoader();
    this.filters.type = 'submissions';
    this.sharedSvc.downloadExcel(this.filters);
    this.showHideLoader();
    
  }

  onSubmitForm() {
    this.showAddSubmisson = false;
    this.getSubmissions({});
  }

  getSubmissions(filters: any) {
    this.filters = filters;
    this.submissionService.getAllSubmissions(filters).subscribe(
      (response: any) => {
        if (response && response.status_code === 0) {
          this.data = response.submissionsList;
          this.submissionsCount = response.submissionsCount;
          this.prepareNotes();
        } else if (response && response.status_code === 1) {
          console.log(response.message);
        }
      },
      (error: any) => {
        console.log("Something went wrong");
      }
    );
  }

  prepareNotes() {
    this.data.forEach((element: any, index: number) => {
      element.id = index;
      if (element && element.notes) {
        element.subNotes = element.notes.substring(0, 8) + '...';
      }
    });
  }

  updateSubmissionById(toUpdateData: any) {
    this.showHideLoader();
    this.submissionService.updateSubmission(toUpdateData).subscribe(
      (response: any) => {
        this.showHideLoader();
        if (response && response.status_code === 0) {
          this.getSubmissions({});
          this.showSubmissionUpdate = false;
          this.showNotes = false;
        } else if (response && response.status_code === 1) {
          console.log(response.message);
        }
      },
      (error: any) => {
        console.log("Something went wrong");
      }
    );
  }

  addSNo() {
    this.data.forEach((element: any, index: any) => {
      element.sNo = index + 1;
    });
  }

  addNew() {
    this.showAddSubmisson = true;
  }

  getTableConfigs() {
    this.sharedSvc.getTableHeaders('submission/submission').subscribe((data: any) => {
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
