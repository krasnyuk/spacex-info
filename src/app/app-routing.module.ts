import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesNames} from "./models/routing/routes-names.enum";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesNames.Pages
  },
  {
    path: RoutesNames.Pages,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: RoutesNames.Pages
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
