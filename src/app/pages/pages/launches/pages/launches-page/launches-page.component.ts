import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Launch} from "../../../../../models/launches/launch.model";
import {listAnimation} from "../../../../../core/animations/list.animation";
import {PageEvent} from "@angular/material";

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
    this.getLaunchesTotalCount();
    this.getLaunchesInitial();
  }

  private getLaunchesInitial() {
    this.launches$ = this.spacexDataService.getLaunches(this.defaultPageIndex, this.defaultPageSize);
  }

  private getLaunchesTotalCount() {
    this.launchesTotalCount$ = this.spacexDataService.getLaunchesTotalCount();
  }

  onPageChange(page: PageEvent): void {
    this.launches$ = this.spacexDataService.getLaunches(page.pageIndex, page.pageSize);
  }

  trackById(index: number, item: Launch) {
    return item.flight_number;
  }

}
