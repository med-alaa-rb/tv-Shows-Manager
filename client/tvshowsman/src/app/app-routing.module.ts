import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-shows',
    loadChildren: () => import('./list-shows/list-shows.module').then( m => m.ListShowsPageModule)
  },  {
    path: 'one-show',
    loadChildren: () => import('./one-show/one-show.module').then( m => m.OneShowPageModule)
  },
  {
    path: 'result-search',
    loadChildren: () => import('./result-search/result-search.module').then( m => m.ResultSearchPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
