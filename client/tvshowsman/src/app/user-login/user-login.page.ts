import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.page.html",
  styleUrls: ["./user-login.page.scss"],
})
export class UserLoginPage implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit() {}

  logUser(name, password) {
    this.local.userName = name;
    this._http.loginUser({ name, password }).subscribe((res) => {
      res
        ? this.router.navigateByUrl("list-shows")
        : alert("username or password wrong");
    });
  }

  signUpUser() {
    this.router.navigateByUrl("sign-up-users");
  }
}
