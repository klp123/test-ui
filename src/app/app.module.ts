import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownComponent } from './modules/shared/components/dropdown/dropdown.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SubmissionsModule } from './modules/submissions/submissions.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { CardComponent } from './modules/shared/components/card/card.component';
import { SharedModule } from './modules/shared/shared.module';
import { ButtonComponent } from './modules/shared/components/button/button.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { HttpInterceptorService } from './interceptors/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    SubmissionsModule,
    CardComponent,
    FooterComponent,
    ButtonComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownComponent
  ],
  providers:[importProvidersFrom([BrowserAnimationsModule]),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true  // Allow multiple interceptors
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
