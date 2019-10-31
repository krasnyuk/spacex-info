import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextLaunchPageRoutingModule } from './next-launch-page-routing.module';
import { NextLaunchPageComponent } from './next-launch-page.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material";
import {SharedModule} from "../../../../../shared/shared.module";


@NgModule({
  declarations: [NextLaunchPageComponent],
  imports: [
    CommonModule,
    NextLaunchPageRoutingModule,
    FlexModule,
    MatCardModule,
    SharedModule
  ]
})
export class NextLaunchPageModule { }
