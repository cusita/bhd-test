import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./presentation/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./presentation/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./presentation/dashboard/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () =>
    import('./presentation/dashboard/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./presentation/dashboard/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./presentation/dashboard/transactions/transactions.module').then( m => m.TransactionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
