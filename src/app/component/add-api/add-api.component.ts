import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ApiData } from 'src/app/model/api-data';
import { ApidataService } from 'src/app/services/apidata.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.css']
})
export class AddApiComponent implements OnInit {

  apiData = new ApiData();
  msg = '';

  constructor(private _service: ApidataService, private _router: Router, private location: Location) { }


  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }


  registerApi() {
    this._service.registerApiFromRemote(this.apiData).subscribe(
      data => {
        console.log("Response recieved");
        this._router.navigate(['loginsuccess/apidata'])
      },
      error => {
        console.log("Exception occured");
        this.msg = error.error;
      })
  }

}
