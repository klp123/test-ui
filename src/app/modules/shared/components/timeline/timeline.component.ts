import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  imports: [ TimelineModule, CommonModule, TagModule ],
  standalone: true
})
export class TimelineComponent {
  @Input() timelineData: any;

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
