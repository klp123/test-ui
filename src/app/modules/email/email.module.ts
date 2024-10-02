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

@NgModule({
  declarations: [
    CreateEmailComponent
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
    SpinnerComponent
  ]
})
export class EmailModule { }
