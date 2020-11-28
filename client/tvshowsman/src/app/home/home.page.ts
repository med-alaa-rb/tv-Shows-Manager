import { Component } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  advance() {
    this.router.navigateByUrl("list-shows");
  }
  loginUser() {
    this.router.navigateByUrl("user-login");
  }
}
