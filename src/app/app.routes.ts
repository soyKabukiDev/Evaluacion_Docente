import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./dasboardAdministracion/layout-admin/adminShell/admin.route'),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./user/form/form.component'),
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];
