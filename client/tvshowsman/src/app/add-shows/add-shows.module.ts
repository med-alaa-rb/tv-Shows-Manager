import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShowsPageRoutingModule } from './add-shows-routing.module';

import { AddShowsPage } from './add-shows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShowsPageRoutingModule
  ],
  declarations: [AddShowsPage]
})
export class AddShowsPageModule {}
