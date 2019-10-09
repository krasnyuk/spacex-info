import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';


@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
