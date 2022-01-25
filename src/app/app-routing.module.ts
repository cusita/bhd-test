import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/configs';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${ROUTES.auth}/${ROUTES.login}`,
    pathMatch: 'full'
  },
  {
    path: ROUTES.auth,
    loadChildren: () => import('./presentation/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./presentation/dashboard/dashboard.module').then( m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./presentation/dashboard/products/products.module').then( m => m.ProductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-detail',
    loadChildren: () =>
    import('./presentation/dashboard/product-detail/product-detail.module').then( m => m.ProductDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./presentation/dashboard/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'transactions',
    loadChildren: () => import('./presentation/dashboard/transactions/transactions.module').then( m => m.TransactionsPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
