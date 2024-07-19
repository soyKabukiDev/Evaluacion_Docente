import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/shell/admin.routes'),
  },
  {
    path: 'login',
    loadComponent:() => import('./auth/login/login.component'),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
