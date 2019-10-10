import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesPageComponent } from './pages/launches-page/launches-page.component';
import {MatCardModule} from "@angular/material";
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [LaunchesPageComponent, LaunchCardComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class LaunchesModule { }
