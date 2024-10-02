import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmailComponent } from './components/create-email/create-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/email/create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
