import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryTimelinePageComponent} from "./pages/history-timeline-page/history-timeline-page.component";


const routes: Routes = [
  {
    path: '',
    component: HistoryTimelinePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {
}
