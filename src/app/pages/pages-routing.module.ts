import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageLayoutComponent} from "./pages/page-layout/page-layout.component";
import {RoutesNames} from "../models/routing/routes-names.enum";


const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesNames.Launches
      },
      {
        path: RoutesNames.Launches,
        loadChildren: () => import('./pages/launches/launches.module').then(m => m.LaunchesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
