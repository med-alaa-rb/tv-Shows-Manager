import { Component, OnInit } from "@angular/core";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-one-show",
  templateUrl: "./one-show.page.html",
  styleUrls: ["./one-show.page.scss"],
})
export class OneShowPage implements OnInit {
  pageContent: Object = {};
  userComments: any;
  constructor(
    private local: LocalService,
    private router: Router,
    private _http: HttpService
  ) {}

  async ngOnInit() {
    this.pageContent = this.local.detail;
    this._http
      .commentsByIdShow({ idShow: this.pageContent["id"] })
      .subscribe((res) => {
        this.userComments = res;
        console.log(this.userComments);
      });
  }
  btp() {
    this.pageContent = {};
    this.router.navigateByUrl("list-shows");
  }
  submitPost(idShow, comment, name) {
    if (!comment) {
      alert("add your comment before");
    } else {
      this._http.postComment({ idShow, comment, name }).subscribe((res) => {});
    }
    this.ngOnInit();
  }
}
