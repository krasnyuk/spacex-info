import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryTimelinePageComponent} from './pages/history-timeline-page/history-timeline-page.component';
import {MatChipsModule, MatIconModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [HistoryTimelinePageComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatIconModule,
    FlexModule,
    MatChipsModule
  ]
})
export class HistoryModule {
}
