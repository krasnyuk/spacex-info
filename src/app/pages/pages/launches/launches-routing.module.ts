import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LaunchesPageComponent} from './pages/launches-page/launches-page.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'next',
    loadChildren: () => import('./pages/next-launch-page/next-launch-page.module').then(m => m.NextLaunchPageModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {
}
