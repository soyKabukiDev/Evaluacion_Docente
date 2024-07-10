import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./dasboardAdministracion/layout-admin/adminShell/admin.route'),
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];
