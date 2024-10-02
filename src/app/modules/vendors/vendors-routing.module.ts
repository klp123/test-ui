import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreateVendorComponent } from './components/create-vendor/create-vendor.component';
import { ListVendorComponent } from './components/list-vendor/list-vendor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vendors/list',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateVendorComponent
  },
  {
    path: 'list',
    component: ListVendorComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
