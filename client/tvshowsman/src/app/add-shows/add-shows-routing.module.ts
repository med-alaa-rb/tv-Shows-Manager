import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShowsPage } from './add-shows.page';

const routes: Routes = [
  {
    path: '',
    component: AddShowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShowsPageRoutingModule {}
