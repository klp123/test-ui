import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
  imports: [CalendarModule, FormsModule],
  standalone: true
})
export class CalenderComponent {

  // @Input() selectionMode: any;
  @Output() selectedDateRange = new EventEmitter();
  dateRange: any | undefined;

  clickCallBack(event: any) {
    let dateRange = {};
    if (this.dateRange && this.dateRange.length) {
      dateRange = {  'start_date': this.dateRange[0], 'end_date': this.dateRange[1]} 
    } else {
      dateRange = {  'start_date': this.dateRange };
    }
    this.selectedDateRange.next(dateRange);
  }
}
