import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneShowPage } from './one-show.page';

const routes: Routes = [
  {
    path: '',
    component: OneShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneShowPageRoutingModule {}
