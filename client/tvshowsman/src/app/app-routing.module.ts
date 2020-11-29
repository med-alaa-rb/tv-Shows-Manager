import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'list-shows',
    loadChildren: () => import('./list-shows/list-shows.module').then( m => m.ListShowsPageModule)
  },
  {
    path: 'one-show',
    loadChildren: () => import('./one-show/one-show.module').then( m => m.OneShowPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'sign-up-users',
    loadChildren: () => import('./sign-up-users/sign-up-users.module').then( m => m.SignUpUsersPageModule)
  },
  {
    path: 'add-shows',
    loadChildren: () => import('./add-shows/add-shows.module').then( m => m.AddShowsPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
