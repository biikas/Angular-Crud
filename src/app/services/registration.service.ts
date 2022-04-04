import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginClientFromRemote(client: Client): Observable<any> {
    return this._http.post("http://localhost:8084/login", client)
  }

  public registerUserFromRemote(client:Client):Observable<any>{
    return this._http.post<any>("http://localhost:8084/clients/add",client);
  }
  

  public getUserFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8084/clients/17");
  }
  public getClientByUserName():Observable<any>{
    return this._http.get<any>("http://localhost:8084/clients/{$username}");
  }

  // public getAll():Observable<ApiData[]>{
  //   return this.http.get<ApiData[]>("http://localhost:8084/data/list/");

  // }

  // public listUserFromRemote(client:Client):Observable<any>{
  //   return this._http.get<any>("http://localhost:8084/clients/list")
  // }
}
