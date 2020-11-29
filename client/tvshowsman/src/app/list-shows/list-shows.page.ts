import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { AvatarDetailsComponent } from "../avatar-details/avatar-details.component";

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
    private router: Router,
    public alertController: AlertController,
    private popoverController: PopoverController
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
    if (val.length === 0) {
      this.ngOnInit();
    }
    this.searchValue = val;
    this.list = this.list.filter(
      (element) =>
        element.name.toLowerCase().search(this.searchValue.toLowerCase()) != -1
    );
  }
  addShow() {
    this.router.navigateByUrl("add-shows");
  }
  async presentAlert(idShow, name) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "cancel",
        },
        {
          text: "addTowatched",
          handler: () => {
            return this._http
              .userFisishedShow({ idShow, name })
              .subscribe((res) => {});
          },
        },
        {
          text: "addToWishList",
          handler: () => {
            return this._http
              .userToWishList({ idShow, name })
              .subscribe((res) => {});
          },
        },
      ],
    });
    await alert.present();
  }

  async settingsPopover() {
    const popover = await this.popoverController.create({
      component: AvatarDetailsComponent,
      cssClass: "popover_setting",
      translucent: true,
    });

    return await popover.present();
  }
}
