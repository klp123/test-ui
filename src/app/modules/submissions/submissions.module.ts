import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ActionButtonsComponent } from '../shared/components/action-buttons/action-buttons.component';
import { AddActionsComponent } from '../shared/components/add-actions/add-actions.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { CreateSubmissionComponent } from './components/create-submission/create-submission.component';
import { ListSubmissionComponent } from './components/list-submission/list-submission.component';
import { SubmissionsRoutingModule } from './submissions-routing.module';
import { AutoCompleteComponent } from '../shared/components/auto-complete/auto-complete.component';
import { TableComponent } from '../shared/components/table/table.component';
import { CalenderComponent } from '../shared/components/calender/calender.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { CardComponent } from '../shared/components/card/card.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { TimelineComponent } from '../shared/components/timeline/timeline.component';
import { UploadComponent } from '../shared/components/upload/upload.component';
import { ConsultantsModule } from '../consultants/consultants.module';
import { VendorsModule } from '../vendors/vendors.module';
import { SpeedDialModule } from 'primeng/speeddial';
import { HttpInterceptorService } from '../../interceptors/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubMenu2Component } from "../shared/components/sub-menu2/sub-menu2.component";
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    CreateSubmissionComponent,
    ListSubmissionComponent
  ],
  imports: [
    FormsModule,
    InputSwitchModule,
    SubmissionsRoutingModule,
    CommonModule,
    ActionButtonsComponent,
    AutoCompleteComponent,
    TableComponent,
    SpeedDialModule,
    CalenderComponent,
    ButtonComponent,
    CardComponent,
    DropdownComponent,
    FieldsetModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    AutocompleteLibModule,
    DialogComponent,
    DialogModule,
    ChipModule,
    TimelineComponent,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    ConsultantsModule,
    VendorsModule,
    AddActionsComponent,
    ToastrModule.forRoot(), 
    SpinnerComponent,
    SubMenu2Component,
    UploadComponent,
    CalendarModule
  ],
  providers: [provideHttpClient(), {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true  // Allow multiple interceptors
  }],
  bootstrap: [ListSubmissionComponent]
})
export class SubmissionsModule { }
