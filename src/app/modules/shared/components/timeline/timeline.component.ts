import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';

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
