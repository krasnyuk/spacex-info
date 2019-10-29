import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {filter, finalize, map, switchMap, takeUntil, tap} from "rxjs/operators";
import {BaseUnsubscribe} from "../../../../../core/base/base-unsubscribe";
import {RoutesNames} from "../../../../../models/routing/routes-names.enum";
import {BehaviorSubject, Observable} from "rxjs";
import {Launch} from "../../../../../models/launches/launch.model";

@Component({
  selector: 'spx-launch-details-page',
  templateUrl: './launch-details-page.component.html',
  styleUrls: ['./launch-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsPageComponent extends BaseUnsubscribe implements OnInit {
  loading$: Observable<boolean>;
  launch$: Observable<Launch>;
  private loading = new BehaviorSubject<boolean>(false);


  constructor(private spacexDataService: SpacexDataService, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.loading$ = this.loading.asObservable();
    this.getLaunchDetails();
  }

  private getLaunchDetails() {
    this.launch$ = this.activatedRoute.paramMap.pipe(
      filter((paramMap: ParamMap) => paramMap.has(RoutesNames.LaunchDetails)),
      map((paramMap: ParamMap) => paramMap.get(RoutesNames.LaunchDetails)),
      tap(() => this.loading.next(true)),
      switchMap((flightNumber: string) => this.spacexDataService.getLaunch(flightNumber).pipe(
        finalize(() => this.loading.next(false))
      )),
      takeUntil(this.unsubscribeOnDestroy$)
    );
  }
}
