import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpUsersPage } from './sign-up-users.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpUsersPageRoutingModule {}
