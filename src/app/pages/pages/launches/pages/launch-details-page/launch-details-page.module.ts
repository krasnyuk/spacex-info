import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchDetailsPageRoutingModule } from './launch-details-page-routing.module';
import { LaunchDetailsPageComponent } from './launch-details-page.component';


@NgModule({
  declarations: [LaunchDetailsPageComponent],
  imports: [
    CommonModule,
    LaunchDetailsPageRoutingModule
  ]
})
export class LaunchDetailsPageModule { }
