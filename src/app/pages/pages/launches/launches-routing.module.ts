import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LaunchesPageComponent} from './pages/launches-page/launches-page.component';
import {RoutesNames} from "../../../models/routing/routes-names.enum";

const routes: Routes = [
  {
    path: '',
    component: LaunchesPageComponent,
    pathMatch: 'full'
  },
  {
    path: RoutesNames.NextLaunch,
    loadChildren: () => import('./pages/next-launch-page/next-launch-page.module').then(m => m.NextLaunchPageModule)
  },
  {
    path: RoutesNames.LaunchDetails,
    loadChildren: () => import('./pages/launch-details-page/launch-details-page.module').then(m => m.LaunchDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {
}
