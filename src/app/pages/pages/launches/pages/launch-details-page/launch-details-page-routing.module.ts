import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LaunchDetailsPageComponent} from './pages/launch-details-page/launch-details-page.component';
import {LaunchGalleryPageComponent} from "./pages/launch-gallery-page/launch-gallery-page.component";
import {RoutesNames} from "../../../../../models/routing/routes-names.enum";
import {LaunchVideoPageComponent} from "./pages/launch-video-page/launch-video-page.component";

const routes: Routes = [
  {
    path: '',
    component: LaunchDetailsPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesNames.Gallery
      },
      {
        path: RoutesNames.Gallery,
        component: LaunchGalleryPageComponent
      },
      {
        path: RoutesNames.Video,
        component: LaunchVideoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchDetailsPageRoutingModule {
}
