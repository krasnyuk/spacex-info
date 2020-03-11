import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchDetailsPageComponent } from './pages/launch-details-page/launch-details-page.component';

const routes: Routes = [{ path: '', component: LaunchDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchDetailsPageRoutingModule { }
