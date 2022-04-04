import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApiComponent } from './component/add-api/add-api.component';
import { ApidataComponent } from './component/apidata/apidata.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration-login-success/registration.component';
import { RegisterComponent } from './component/registration/registration.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:RegistrationComponent},
  {path:'registration',component:RegisterComponent},
  {path:'loginsuccess/apidata',component:ApidataComponent},
  {path:'loginsuccess/apidata/add',component:AddApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
