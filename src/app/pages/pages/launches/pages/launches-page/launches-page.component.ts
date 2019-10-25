import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Launch} from "../../../../../models/launches/launch.model";
import {listAnimation} from "../../../../../core/animations/list.animation";
import {PageEvent} from "@angular/material";
import {map} from "rxjs/operators";
import {ListResponse} from "../../../../../models/api/response/list.response";

@Component({
  selector: 'spx-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: listAnimation
})
export class LaunchesPageComponent implements OnInit {
  launches$: Observable<Array<Launch>>;
  launchesTotalCount$: Observable<number>;
  readonly pageSizeOptions: Array<number> = [5, 10, 25, 100];
  readonly defaultPageSize: number = 10;
  readonly defaultPageIndex: number = 0;

  constructor(private spacexDataService: SpacexDataService) {
  }

  ngOnInit() {
    this.getLaunchesInitial();
  }

  private getLaunchesInitial() {
    this.launches$ = this.spacexDataService.getLaunches(this.defaultPageIndex, this.defaultPageSize).pipe(
      map((launches: ListResponse<Launch>) => launches.items)
    );
  }

  onPageChange(page: PageEvent): void {
  }

  trackById(index: number, item: Launch) {
    return item.flight_number;
  }

}
