import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextLaunchPageComponent } from './next-launch-page.component';

const routes: Routes = [{ path: '', component: NextLaunchPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NextLaunchPageRoutingModule { }
