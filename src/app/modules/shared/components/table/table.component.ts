import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TimelineComponent } from '../timeline/timeline.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { SharedService } from '../../service/shared.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    imports: [TableModule, DialogModule, TimelineComponent, ToolbarModule, ButtonComponent, ButtonModule, FormsModule, CommonModule, TagModule, DropdownComponent, OverlayPanelModule, MultiSelectModule],
    standalone: true
})

export class TableComponent {
    @Input() columns: any = [];
    @Input() data: any = [];
    @Input() rows: any = [];
    @Input() submissionsCount: any = [];
    @Input() groupBy: string = '';
    @Input() table: string = '';
    @Input() tableWidth = '';
    @Input() groupByValues: any = [];
    @Input() statusTimeLine: any;
    @Input() pageType: any;
    @Output() selectedActionEmitter: any = new EventEmitter();
    @Output() onGlobalSearch: any = new EventEmitter();
    metaKey: boolean = true;
    selectedId: string = '';
    selectItem: any;
    showDelete = false;
    searchString: string = '';
    showDeleteConfirmation = false;
    actionData = {};
    selectedColumns: any = [];
    selectedCellId: string = '';
    loggedInUserType: any = '';
    isGroupByApplied: string = '';
    actionValues: any = [
        { name: 'Edit', code: 'edit' },
        { name: 'Delete', code: 'delete' }];
    expandedRows = {};

    constructor(private sharedSvc: SharedService) { }

    ngOnInit() {
        this.loggedInUserType = this.sharedSvc.getLoggedInUserType();
        this.showDelete = this.sharedSvc.getUserTypePermissions(this.loggedInUserType, this.pageType)?.delete;
        console.log(this.showDelete)
        this.addRemoveClass();
    }

    getRows() {

    }

    ngOnChanges() {
        this.onSelectColumns = JSON.parse(JSON.stringify(this.columns));
    }

    onSearchGlobal() {
        this.onGlobalSearch.emit(this.searchString);
    }

    onSelectColumns(event: any) {
        const index = this.selectedColumns.findIndex((col: any) => col.name === event?.itemValue?.header);
        if (index !== -1) {
            this.selectedColumns.splice(index, 1);
        } else {
            this.selectedColumns.push({ name: event?.itemValue?.header, code: event.itemValue?.header });
        }
        this.filterData();
    }

    filterData(): void {
        this.data = this.data.filter((item: any) => {
            return this.selectedColumns.every((column: any) => item[column.field] !== undefined);
        });
    }

    getStatusSeverity(status: string) {
        switch (status) {
            case 'PENDING':
                return 'warning';
            case 'DELIVERED':
                return 'success';
            case 'CANCELLED':
                return 'danger';
            default:
                return 'danger';
        }
    }

    onEdit(event: any) {
        if (!this.isPositiveInteger(event.target.value)) {
            event.stopPropagation();
        }
    }


    onSelectAction(data: any, event: string) {
        if (event === 'delete') {
            this.actionData = JSON.parse(JSON.stringify(data));
            this.showDeleteConfirmation = true;
            return;
        } else if (event === 'confirmDelete') {
            this.showDeleteConfirmation = false;
            data = JSON.parse(JSON.stringify(this.actionData));
        }
        this.selectedId = data._id;
        let dataVal = this.prepareEmitData(data, event);
        this.selectedActionEmitter.emit(dataVal)
    }

    prepareEmitData(data: any, event: string) {
        let dataVal = { 'id': data._id, action: event, statusTimeLine: data.statusTimeLine, timelineData: data.statusTimeLine, notes: data.notes, data: data };
        return dataVal;
    }

    filterGroupByValue(): string {
        let toReturnVal = '';
        this.groupByValues.forEach((element: any) => {
            console.log(element.name, this.groupBy);
            if (element.name === this.groupBy) {
                toReturnVal = element.code;
            }
        });
        return toReturnVal;
    }


    isPositiveInteger(val: any) {
        let str = String(val);
        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        var n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'PASSED':
                return 'success';
            case 'FAILED':
                return 'danger';
            case 'AWAITING':
                return 'warning';
            case 'SCHEDULED':
                return 'info';
            default:
                return 'info';
        }
    }

    getSubmissionCount(groupByName: string) {
        let count: number = 0;
        this.submissionsCount.forEach((element: any) => {
            if (element._id === groupByName) {
                count = element.count;
            }
        });
        return count;
    }

    addRemoveClass(){
        // getElementsByClassName or getElementsByTagName
        document.getElementsByTagName('testing')[0].classList.add('providerMakeChanges');
        setTimeout(()=>{
          document.getElementsByTagName('body')[0].classList.remove('providerMakeChanges');
        }, 5000)
      }

    onClickCell(data: any) {
        this.selectedCellId = data._id;
       
       // this.document.getElementById('testing').classList.add('newClassName');
    }
}
