import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { ListJobComponent } from './components/list-job/list-job.component';

@NgModule({
  declarations: [
    CreateJobComponent,
    ListJobComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobsModule { }
