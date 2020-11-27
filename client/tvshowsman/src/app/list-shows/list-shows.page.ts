import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-shows",
  templateUrl: "./list-shows.page.html",
  styleUrls: ["./list-shows.page.scss"],
})
export class ListShowsPage implements OnInit {
  list: any;
  searchValue: String = "";
  constructor(
    public api: ApiService,
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.api.getData().subscribe((res) => {
      this.list = res;
      console.log(this.list);
    });
  }
  showMore(id) {
    this.local.detail = this.list[id - 1];
    this.router.navigateByUrl("/one-show");
  }
  onInput(val) {
    if(val.length === 0){
      this.ngOnInit()
    }
    this.searchValue = val;
    this.list = this.list.filter((element) => element.name.search(this.searchValue) != -1);
  }
 
}
