import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsultantComponent } from './components/list-consultant/list-consultant.component';
import { CreateConsultantComponent } from './components/create-consultant/create-consultant.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/consultants/list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateConsultantComponent
  },
  {
    path: 'list',
    component: ListConsultantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantsRoutingModule { }
