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
  register(obj) {
    return this.http.post(this.ROOT_URL + "/addUser", obj);
  }
  //check duplicated userName
  checkUsername(obj) {
    return this.http.post(this.ROOT_URL + "/checkName", obj);
  }
  // log user
  loginUser(obj) {
    return this.http.post(this.ROOT_URL + "/loginUser", obj);
  }

  //user show comments
  postComment(obj) {
    return this.http.post(this.ROOT_URL + "/postComments", obj);
  }
  // user Comments by idShow
  commentsByIdShow(obj) {
    return this.http.post(this.ROOT_URL + "/dataById", obj);
  }
  // add user finished show
  userFisishedShow(obj) {
    return this.http.post(this.ROOT_URL + "/endedShow", obj);
  }
  // add show to user wish list
  userToWishList(obj) {
    return this.http.post(this.ROOT_URL + "/favShow", obj);
  }
  renderEndedShow(obj) {
    return this.http.post(this.ROOT_URL + "/sendEndedShow", obj);
  }
  renderWishList(obj) {
    return this.http.post(this.ROOT_URL + "/sendFavShow", obj);
  }
}
