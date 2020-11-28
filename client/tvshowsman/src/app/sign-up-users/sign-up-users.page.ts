import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-users",
  templateUrl: "./sign-up-users.page.html",
  styleUrls: ["./sign-up-users.page.scss"],
})
export class SignUpUsersPage implements OnInit {
  validName: any = "";

  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit() {}

  signUser(name, email, fav, password, repPass) {
    this._http.checkUsername({ name }).subscribe((res) => {
      this.validName = res;
    });
    if (!this.validName) {
      alert("name already exists, sorry!!");
    } else if (password !== repPass) {
      alert("the password must be the same");
    } else {
      this._http.register({ name, email, fav, password }).subscribe((res) => {
        this.router.navigateByUrl("list-shows");
      });
    }
  }
}
