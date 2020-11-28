import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpUsersPageRoutingModule } from './sign-up-users-routing.module';

import { SignUpUsersPage } from './sign-up-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpUsersPageRoutingModule
  ],
  declarations: [SignUpUsersPage]
})
export class SignUpUsersPageModule {}
