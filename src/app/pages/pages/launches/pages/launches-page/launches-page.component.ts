import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Launch} from "../../../../../models/launches/launch.model";
import {listAnimation} from "../../../../../core/animations/list.animation";
import {PageEvent} from "@angular/material";
import {Select, Store} from "@ngxs/store";
import {LaunchesState} from "../../state/launches.state";
import {
  LoadLaunches,
  SetLaunchesOrderBy,
  SetLaunchesPageIndex,
  SetLaunchesPageSize,
  SetLaunchesSortByField
} from "../../state/launches.actions";
import {OrderBy} from "../../../../../models/api/order-by.enum";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'spx-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: listAnimation
})
export class LaunchesPageComponent implements OnInit {

  @Select(LaunchesState.launches) launches$: Observable<Array<Launch>>;
  @Select(LaunchesState.allLaunchesTotal) launchesTotal$: Observable<number>;
  @Select(LaunchesState.loading) launchesLoading$: Observable<boolean>;
  @Select(LaunchesState.pageIndex) pageIndex$: Observable<number>;
  @Select(LaunchesState.pageSize) pageSize$: Observable<number>;
  @Select(LaunchesState.orderBy) orderBy$: Observable<OrderBy>;
  @Select(LaunchesState.sortByFieldList) sortByFieldList$: Observable<Array<KeyValue<string, string>>>;
  @Select(LaunchesState.sortByField) sortByField$: Observable<string>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.loadLaunchesInitial();
  }

  onSortByChange(fieldName: string): void {
    this.store.dispatch([
      new SetLaunchesSortByField(fieldName),
      new LoadLaunches()
    ]);
  }

  onOrderByChange(orderBy: OrderBy): void {
    this.store.dispatch([
      new SetLaunchesOrderBy(orderBy),
      new LoadLaunches()
    ]);
  }

  onPageChange(page: PageEvent): void {
    this.store.dispatch([
      new SetLaunchesPageSize(page.pageSize),
      new SetLaunchesPageIndex(page.pageIndex),
      new LoadLaunches()
    ]);
  }

  trackById(index: number, item: Launch) {
    return item.flight_number;
  }

  private loadLaunchesInitial() {
    this.store.dispatch(new LoadLaunches());
  }

}
