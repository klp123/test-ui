import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmailComponent } from './components/create-email/create-email.component';
import { ListEmailComponent } from './components/list-email/list-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/email/list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateEmailComponent
  },
  {
    path: 'list',
    component: ListEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
