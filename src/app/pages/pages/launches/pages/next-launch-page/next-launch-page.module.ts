import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextLaunchPageRoutingModule } from './next-launch-page-routing.module';
import { NextLaunchPageComponent } from './next-launch-page.component';


@NgModule({
  declarations: [NextLaunchPageComponent],
  imports: [
    CommonModule,
    NextLaunchPageRoutingModule
  ]
})
export class NextLaunchPageModule { }
