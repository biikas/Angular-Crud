import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiData } from 'src/app/model/api-data';
import { ApidataService } from 'src/app/services/apidata.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  apiDatas?:ApiData[];

  apiDataToUpdate={
    api_name:"",
    api_data:""
  };
  constructor(private _route:Router,private apiService:ApidataService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData():void{
    this.apiService.getAll()
    .subscribe(
      data=>{
        this.apiDatas=data;
        console.log(data);
      },
      error=>{
        console.log(error,"some thing is wrong");
      }
    )
  }
  edit(apidata:any){
    this.apiDataToUpdate=apidata;
    return null;
  }

  updateData(){
    this.apiService.updateApiFromRemote(this.apiDataToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error)=>{
        console.log(error);
        console.log("something is wrong")
      }
    )
  }
}
