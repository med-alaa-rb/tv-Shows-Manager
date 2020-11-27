import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:3000";

  //send api to backend to range it 
  // sendAllData(arr){
  //   return this.http.post(this.ROOT_URL + "/allData", arr)
  // }
}
