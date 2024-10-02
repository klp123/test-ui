import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSubmissionComponent } from './components/list-submission/list-submission.component';
import { CreateSubmissionComponent } from './components/create-submission/create-submission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/submissions/list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateSubmissionComponent
  },
  {
    path: 'list',
    component: ListSubmissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
