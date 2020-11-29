import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-avatar-details",
  templateUrl: "./avatar-details.component.html",
  styleUrls: ["./avatar-details.component.scss"],
})
export class AvatarDetailsComponent implements OnInit {
  site;

  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  wifiSetting() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
  }

  logout() {
    // code for logout
    this.popoverController.dismiss();
  }

  userProfile() {
    this.router.navigateByUrl("user-profile");
  }
}
