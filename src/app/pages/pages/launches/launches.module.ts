import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LaunchesRoutingModule} from './launches-routing.module';
import {LaunchesPageComponent} from './pages/launches-page/launches-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule, MatSelectModule,
  MatTooltipModule
} from "@angular/material";
import {LaunchCardComponent} from './components/launch-card/launch-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxsModule} from "@ngxs/store";
import {LaunchesState} from "./state/launches.state";
import {ListFilterModule} from "../../../shared/modules/list-filter/list-filter.module";


@NgModule({
  declarations: [LaunchesPageComponent, LaunchCardComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      LaunchesState
    ]),
    LaunchesRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ListFilterModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class LaunchesModule { }
