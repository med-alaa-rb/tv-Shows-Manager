import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

import { HomePageRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  nextStep() {
    // this.router.navigateByUrl("list-shows");
    // console.log("hello");
  }
}
