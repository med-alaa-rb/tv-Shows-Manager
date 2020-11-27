import { Component, OnInit } from '@angular/core';
import { LocalService } from "../local.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-one-show',
  templateUrl: './one-show.page.html',
  styleUrls: ['./one-show.page.scss'],
})
export class OneShowPage implements OnInit {
  pageContent : Object = {} 
  constructor(
    private local: LocalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageContent = this.local.detail
    console.log(this.pageContent)
  }
  btp(){
    this.pageContent = {}
    this.router.navigateByUrl("list-shows")
  }

}
