import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { CalenderComponent } from '../calender/calender.component';
import { ButtonComponent } from '../button/button.component';
import { SharedService } from '../../service/shared.service';
import { debounceTime, Subject } from 'rxjs';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CardModule, DropdownComponent, OverlayPanelModule, PanelModule, PanelMenuModule, FieldsetModule, FormsModule, CommonModule, CalenderComponent, ButtonComponent],
  standalone: true
})
export class CardComponent {
  private searchSubject = new Subject<string>();
  @Input() groupByValues: any = [];
  @Input() title: any = '';
  @Output() customDatesApplied: any = new EventEmitter();
  @Output() selectedDateRange: any = new EventEmitter();
  @Output() onGlobalSearch: any = new EventEmitter();
  @Output() onClickAdd: any = new EventEmitter();
  @Output() onClickExport: any = new EventEmitter();
  @Output() resetFilters: any = new EventEmitter();
  
  searchStr: any;
  showCustom = false;
  selectedDates = [];
  icon2:any = 'pi pi-filter';
  label: any = 'Today';

  constructor(public sharedSvc: SharedService) {
    this.searchSubject.pipe(
      debounceTime(300) // Add a debounce time if needed to avoid rapid calls
    ).subscribe(searchText => {
      this.performSearch(searchText);
    });
  }

  showCustomDates() {
    this.showCustom = !this.showCustom; 
  }

  onSelectUpdateValues(event: any) {
    this.sharedSvc.updateGroupBy(event);
  }

  clearFilters() {
    this.showCustom = false;
    this.searchStr = null;
    this.selectedDates = [];
    this.resetFilters.next();
  }

  onSelectDateRange(dates: any) {
    this.selectedDates = dates;
  }

  onSearch(): void {
    this.searchSubject.next(this.searchStr);
  }

  performSearch(searchText: string): void {
    this.onGlobalSearch.next(searchText);
  }

  onClickAddBtn() {
    this.onClickAdd.emit();
  }

  onClickExportBtn() {
    this.onClickExport.emit();
  }

  onApplyCustomDateFilter() {
    this.selectedDateRange.emit(this.selectedDates);
  }

  filterMonthSubmissions() {
    this.selectedDateRange.emit(this.getCurrentMonthFirstAndTodayDate());
  }

  filterTodaySubmissions() {
    this.selectedDateRange.emit({start_date: new Date(), end_date: new Date()});
  }

  getCurrentMonthFirstAndTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
  
    // Get the first date of the current month
    const start_date = new Date(year, month, 1);
  
    // Return an object with both dates
    return {
      start_date,
      end_date: today
    };
  }
  
  
}
