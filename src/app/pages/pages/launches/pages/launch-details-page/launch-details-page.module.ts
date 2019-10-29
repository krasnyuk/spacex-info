import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchDetailsPageRoutingModule } from './launch-details-page-routing.module';
import { LaunchDetailsPageComponent } from './launch-details-page.component';
import {MatCardModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [LaunchDetailsPageComponent],
  imports: [
    CommonModule,
    LaunchDetailsPageRoutingModule,
    MatCardModule,
    FlexModule,
    SharedModule
  ]
})
export class LaunchDetailsPageModule { }
