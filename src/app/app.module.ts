import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAddComponent } from './component/client-add/client-add.component';

import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './component/registration-login-success/registration.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/registration/registration.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ApidataComponent } from './component/apidata/apidata.component';
import { AddApiComponent } from './component/add-api/add-api.component';
import { EditApiComponent } from './component/edit-api/edit-api.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientAddComponent,

    RegistrationComponent,
    LoginComponent,
    RegisterComponent,
    ClientListComponent,
    ApidataComponent,
    AddApiComponent,
    EditApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
