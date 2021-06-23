import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'insertData', loadChildren: () => import('./pages/insert-data/insert-data.module').then(m => m.InsertDataModule) },
  { path: 'loginPage', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: () => import('./pages/table-page/table-page.module').then(m => m.TablePageModule) },
  { path: 'sign-up-page', loadChildren: () => import('./pages/sign-up-page/sign-up-page.module').then(m => m.SignUpPageModule) },

  { path: '**', canActivate: [AuthGuardService], component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
