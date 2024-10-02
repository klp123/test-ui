import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastrModule } from 'ngx-toastr';

import { ButtonComponent } from '../shared/components/button/button.component';
import { CreateVendorComponent } from './components/create-vendor/create-vendor.component';
import { ListVendorComponent } from './components/list-vendor/list-vendor.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { InfoMessageComponent } from '../shared/components/info-message/info-message.component';
import { TableComponent } from '../shared/components/table/table.component';
import { CalenderComponent } from '../shared/components/calender/calender.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { CardComponent } from '../shared/components/card/card.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { GoogleLocationComponent } from '../shared/components/google-location/google-location.component';


@NgModule({
  declarations: [
    CreateVendorComponent,
    ListVendorComponent
  ],
  imports: [
    CommonModule,CardModule,
    FormsModule,
    VendorsRoutingModule,
    ButtonComponent,
    ReactiveFormsModule,
    InfoMessageComponent,
    FieldsetModule,
    InputTextareaModule,
    TableComponent,
    CalenderComponent,
    InputSwitchModule,
    AutocompleteLibModule,
    DialogComponent,
    CardComponent,
    DropdownComponent,
    DialogModule,
    GoogleLocationComponent,
    ToastrModule
  ],
  exports: [CreateVendorComponent],
  providers: [provideHttpClient()]
})
export class VendorsModule { }
