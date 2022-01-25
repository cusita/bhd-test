import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from 'src/app/core/configs';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${ROUTES.login}`,
  },
  {
    path: ROUTES.login,
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [ AuthService ]
})
export class AuthModule {}
