import { Component, OnInit } from '@angular/core';

import { RegistrationService } from 'src/app/services/registration.service';
import { Route, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  clients?:Client;
  name?:String;
  constructor(private _service:RegistrationService) { }

  ngOnInit(): void {
    this.retrieveClient();
  }
  retrieveClient():void{
    this._service.getUserFromRemote()
    .subscribe(
      data=>{
        this.clients=data;
        console.log(data.clientResponse.name);
        this.name=data.clientResponse.name;
      },
      error=>{
        console.log(error,"some thing is wrong");
      }

    )
  }


  
  

}
