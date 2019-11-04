import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryTimelinePageComponent } from './pages/history-timeline-page/history-timeline-page.component';


@NgModule({
  declarations: [HistoryTimelinePageComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
