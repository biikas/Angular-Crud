import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { __createBinding } from 'tslib';
import { ApiData } from '../model/api-data';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http:HttpClient,_regis:RegistrationService) { }
  
  
  public getAll():Observable<ApiData[]>{
    return this.http.get<ApiData[]>("http://localhost:8084/data/list/");

  }

  public registerApiFromRemote(apiData:ApiData):Observable<any>{
    return this.http.post<any>("http://localhost:8084/data/add/admin",apiData);
  }

  public updateApiFromRemote(apiData:ApiData):Observable<any>{
    return this.http.put<any>("http://localhost:8084/data/update",apiData);
  }



  
  

 

}
