import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  obj: any = {};
  constructor(
    public api: ApiService,
    private _http: HttpService,
    private local: LocalService
  ) {}

  ngOnInit() {
    this.obj = { name: this.local.userName };
    this._http.renderEndedShow(this.obj).subscribe((res) => {
      console.log(res);
    });
    this._http.renderWishList(this.obj).subscribe((res) => {
      console.log(res);
    });
  }
}
