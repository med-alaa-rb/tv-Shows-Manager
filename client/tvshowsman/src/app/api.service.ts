import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  getData(){
    return this.http.get(' http://api.tvmaze.com/shows')
  }
}
