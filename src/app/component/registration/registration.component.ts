import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent implements OnInit {

  client = new  Client();
  msg='';

  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerClient(){
    this._service.registerUserFromRemote(this.client).subscribe(
      data =>{
        console.log("Response recieved");
        this._router.navigate([''])
      },
      error =>{
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
  }

}
