import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Launch} from "../../../../../models/launches/launch.model";
import {listAnimation} from "../../../../../core/animations/list.animation";

@Component({
  selector: 'spx-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: listAnimation
})
export class LaunchesPageComponent implements OnInit {
  launches$: Observable<Array<Launch>>;

  constructor(private spacexDataService: SpacexDataService) {
  }

  ngOnInit() {
    this.launches$ = this.spacexDataService.getLaunches();
  }

}
