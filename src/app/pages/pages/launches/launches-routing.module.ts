import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {
}
