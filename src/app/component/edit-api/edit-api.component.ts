import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiData } from 'src/app/model/api-data';
import { ApidataService } from 'src/app/services/apidata.service';

@Component({
  selector: 'app-edit-api',
  templateUrl: './edit-api.component.html',
  styleUrls: ['./edit-api.component.css']
})
export class EditApiComponent implements OnInit {

  apiData = new ApiData();
  msg = '';

  constructor(private _service: ApidataService, private _router: Router, private location: Location) { }

  // goBack(): void {
  //   this.location.back();
  // }

  ngOnInit(): void {
  }

}


