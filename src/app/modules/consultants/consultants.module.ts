import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { ChipsModule } from 'primeng/chips';
import { TagInputModule } from 'ngx-chips';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CreateConsultantComponent } from './components/create-consultant/create-consultant.component';
import { ListConsultantComponent } from './components/list-consultant/list-consultant.component';
import { ConsultantsRoutingModule } from './consultants-routing.module';
import { InfoMessageComponent } from '../shared/components/info-message/info-message.component';
import { FileUploadComponent } from '../shared/components/file-upload/file-upload.component';
import { TableComponent } from '../shared/components/table/table.component';
import { CalenderComponent } from '../shared/components/calender/calender.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { CardComponent } from '../shared/components/card/card.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    CreateConsultantComponent,
    ListConsultantComponent
  ],
  imports: [
    CommonModule,
    ConsultantsRoutingModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    InfoMessageComponent,
    FieldsetModule,
    FileUploadComponent,
    TableComponent,
    DropdownModule,
    CalenderComponent,
    InputSwitchModule,
    AutocompleteLibModule,
    DialogComponent,
    CardComponent,
    DropdownComponent,
    DialogModule,
    ChipsModule,
    SpinnerComponent,
    TagInputModule,
    ToastrModule
  ],
  exports: [CreateConsultantComponent]
})
export class ConsultantsModule { }
