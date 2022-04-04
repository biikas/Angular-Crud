import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client=new Client();
  msg:string="";

  constructor(private _service:RegistrationService,private _route:Router) { }

  ngOnInit(): void {
  }

  loginClient(){
    this._service.loginClientFromRemote(this.client).subscribe(
      data =>{
        console.log("response recieved"),
        this._route.navigate(['loginsuccess'])
      },
      error =>{console.log("exception occured"),
      this.msg="Bad Credentials, Please enter valid email id and password";}
            
    )
  }

}
