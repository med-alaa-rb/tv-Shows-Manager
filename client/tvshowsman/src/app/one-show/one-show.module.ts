import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneShowPageRoutingModule } from './one-show-routing.module';

import { OneShowPage } from './one-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneShowPageRoutingModule
  ],
  declarations: [OneShowPage]
})
export class OneShowPageModule {}
