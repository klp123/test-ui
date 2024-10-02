import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { ToastrModule } from 'ngx-toastr';
import { CreateRecruiterComponent } from './components/create-recruiter/create-recruiter.component';
import { ListRecruiterComponent } from './components/list-recruiter/list-recruiter.component';
import { RecruitersRoutingModule } from './recruiters-routing.module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { TextAreaComponent } from '../shared/components/text-area/text-area.component';
import { InfoMessageComponent } from '../shared/components/info-message/info-message.component';
import { FileUploadComponent } from '../shared/components/file-upload/file-upload.component';
import { TableComponent } from '../shared/components/table/table.component';
import { CalenderComponent } from '../shared/components/calender/calender.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { CardComponent } from '../shared/components/card/card.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    CreateRecruiterComponent,
    ListRecruiterComponent
  ],
  imports: [
    CommonModule,
    RecruitersRoutingModule,
    ButtonComponent,
    TextAreaComponent,
    FormsModule,
    ReactiveFormsModule,
    InfoMessageComponent,
    FieldsetModule,
    FileUploadComponent,
    TableComponent,
    CalenderComponent,
    InputSwitchModule,
    AutocompleteLibModule,
    DialogComponent,
    CardComponent,
    DropdownComponent,
    DialogModule,
    ToastrModule
  ]
})
export class RecruitersModule { }
