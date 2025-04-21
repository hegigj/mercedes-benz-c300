import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'controller',
    pathMatch: 'full',
  },
  {
    path: 'controller',
    loadComponent: () =>
      import('./pages/controller/controller.page').then( m => m.ControllerPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'connections',
    loadComponent: () => import('./pages/connections/connections.page').then( m => m.ConnectionsPage)
  },
];
