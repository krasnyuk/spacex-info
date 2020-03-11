import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LaunchDetailsPageRoutingModule} from './launch-details-page-routing.module';
import {LaunchDetailsPageComponent} from './pages/launch-details-page/launch-details-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatTooltipModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../../../../../shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {LaunchDetailsState} from "./state/launch-details.state";
import { LaunchGalleryPageComponent } from './pages/launch-gallery-page/launch-gallery-page.component';
import { LaunchVideoPageComponent } from './pages/launch-video-page/launch-video-page.component';


@NgModule({
  declarations: [LaunchDetailsPageComponent, LaunchGalleryPageComponent, LaunchVideoPageComponent],
  imports: [
    CommonModule,
    LaunchDetailsPageRoutingModule,
    MatCardModule,
    FlexModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgxsModule.forFeature([
      LaunchDetailsState
    ]),
    MatTabsModule,
  ]
})
export class LaunchDetailsPageModule { }
