import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Observable} from "rxjs";
import {Launch} from "../../../../../models/launches/launch.model";

@Component({
  selector: 'spx-next-launch-page',
  templateUrl: './next-launch-page.component.html',
  styleUrls: ['./next-launch-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextLaunchPageComponent implements OnInit {
  launch$: Observable<Launch>;

  constructor(private spacexDataService: SpacexDataService) {
  }

  ngOnInit() {
    this.loadNextLaunch();
  }

  private loadNextLaunch() {
    this.launch$ = this.spacexDataService.getNextLaunch();
  }
}
