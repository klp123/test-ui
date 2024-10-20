import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CreateEmailComponent } from './components/create-email/create-email.component';
import { EmailRoutingModule } from './email-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorComponent } from '../shared/components/editor/editor.component';
import { EditorModule } from 'primeng/editor';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { ListEmailComponent } from './components/list-email/list-email.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableComponent } from '../shared/components/table/table.component';
import { CardComponent } from '../shared/components/card/card.component';

@NgModule({
  declarations: [
    CreateEmailComponent,
    ListEmailComponent
  ],
  imports: [
    EmailRoutingModule,
    CommonModule,
    FormsModule, 
    ButtonComponent,
    EditorComponent,
    EditorModule,
    InputTextareaModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    ToastrModule,
    SpinnerComponent,
    CardModule,
    DialogModule,
    TableComponent,
    CardComponent
  ]
})
export class EmailModule { }
