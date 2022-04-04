import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL ="http://localhost:8084/clients/list";
  constructor(private httpClient:HttpClient) { }

  getAllClient():Observable<Client[]>{
    return this.httpClient.get<Client[]>('${this.baseURL}');
  }
}
