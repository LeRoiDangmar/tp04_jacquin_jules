import { Routes } from '@angular/router';

const routes: Routes = [
    { path: 'front-page', loadChildren: () => import('./features/front-page/front-page.module').then(m => m.FrontPageModule) },
    { path: '', redirectTo: '/feature', pathMatch: 'full' },
    { path: '**', redirectTo: '/feature' },
  ];
