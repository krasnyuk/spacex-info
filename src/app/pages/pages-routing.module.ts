import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SideNavWrapperPageComponent} from "./pages/side-nav-wrapper-page/side-nav-wrapper-page.component";
import {RoutesNames} from "../models/routing/routes-names.enum";


const routes: Routes = [
  {
    path: '',
    component: SideNavWrapperPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesNames.Launches
      },
      {
        path: RoutesNames.Launches,
        loadChildren: () => import('./pages/launches/launches.module').then(m => m.LaunchesModule)
      },
      {
        path: RoutesNames.History,
        loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule)
      },
      {
        path: RoutesNames.Rockets,
        loadChildren: () => import('./pages/rockets/rockets.module').then(m => m.RocketsModule)
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
