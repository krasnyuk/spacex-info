import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Launch} from "../../../../../models/launches/launch.model";
import {listAnimation} from "../../../../../core/animations/list.animation";
import {PageEvent} from "@angular/material";
import {Select, Store} from "@ngxs/store";
import {LaunchesState} from "../../state/launches.state";
import {LoadLaunches, SetLaunchesPageIndex, SetLaunchesPageSize} from "../../state/launches.actions";

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

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.loadLaunchesInitial();
  }

  private loadLaunchesInitial() {
    this.store.dispatch(new LoadLaunches());
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

}
