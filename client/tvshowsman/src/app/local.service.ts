import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalService {
  detail: Object = {};
  userName: any = "";

  constructor() {}
}
