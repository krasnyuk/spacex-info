import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Observable} from "rxjs";
import {HistoryEvent} from "../../../../../models/history/history.model";
import {listFadeAnimation} from "../../../../../core/animations/list.animation";

@Component({
  selector: 'spx-history-timeline-page',
  templateUrl: './history-timeline-page.component.html',
  styleUrls: ['./history-timeline-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: listFadeAnimation
})
export class HistoryTimelinePageComponent implements OnInit {
  historyEvents$: Observable<Array<HistoryEvent>>;

  constructor(private spacexDataService: SpacexDataService) {
  }

  ngOnInit() {
    this.loadHistory();
  }

  private loadHistory() {
    this.historyEvents$ = this.spacexDataService.getHistory();
  }
}
