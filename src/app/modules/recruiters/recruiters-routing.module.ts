import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecruiterComponent } from './components/list-recruiter/list-recruiter.component';
import { CreateRecruiterComponent } from './components/create-recruiter/create-recruiter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/consultants/list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateRecruiterComponent
  },
  {
    path: 'list',
    component: ListRecruiterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersRoutingModule { }
