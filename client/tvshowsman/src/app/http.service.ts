import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3000";


  //Authentication

  //send user data 
  register(obj){
    return this.http.post(this.ROOT_URL + "/addUser", obj)
  }
  //check duplicated userName
  checkUsername(obj){
    return this.http.post(this.ROOT_URL + "/checkName", obj)
  }
}
