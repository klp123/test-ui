import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { NgxTimelineModule, NgxTimelineItemPosition } from '@frxjs/ngx-timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  imports: [ TimelineModule, CommonModule, TagModule, NgxTimelineModule ],
  standalone: true
})
export class TimelineComponent {
 @Input() timeLineData: any;
 @Input() selectedConsultant!: string;
  date = new Date();
  events: any = [
    { id: 5, description: 'This is the description of the event 5', timestamp: this.date, title: 'Submitted', itemPosition: NgxTimelineItemPosition.ON_LEFT },
    { id: 0, description: 'This is the description of the event 0', timestamp: this.date, title: 'Screening Round (Scheduled)', itemPosition: NgxTimelineItemPosition.ON_RIGHT },
    { id: 1, description: 'This is the description of the event 1', timestamp: this.date, title: 'Screening Round (Awaiting)', itemPosition: 'left' },
    { id: 2, description: 'This is the description of the event 2', timestamp: this.date, title: 'title 2', itemPosition: 'right' },
    { id: 3, description: 'This is the description of the event 3', timestamp: this.date, title: 'title 3', itemPosition: 'left' },
    { id: 4, description: 'This is the description of the event 4', timestamp: this.date, title: 'title 4', itemPosition: 'right' },
  ];
  constructor(){
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
}
