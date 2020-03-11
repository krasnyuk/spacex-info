import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {distinctUntilChanged, filter, map, takeUntil, tap} from "rxjs/operators";
import {BaseUnsubscribe} from "../../../../../../../core/base/base-unsubscribe";
import {RoutesNames} from "../../../../../../../models/routing/routes-names.enum";
import {Observable} from "rxjs";
import {Launch} from "../../../../../../../models/launches/launch.model";
import {SeoService} from "../../../../../../../core/services/seo.service";
import {Select, Store} from "@ngxs/store";
import {LaunchDetailsState} from "../../state/launch-details.state";
import {LoadLaunchDetails} from "../../state/launch-details.actions";

@Component({
  selector: 'spx-launch-details-page',
  templateUrl: './launch-details-page.component.html',
  styleUrls: ['./launch-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsPageComponent extends BaseUnsubscribe implements OnInit {
  @Select(LaunchDetailsState.launchIsLoading) loading$: Observable<boolean>;
  @Select(LaunchDetailsState.launchDetails) launch$: Observable<Launch | null>;

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private seoService: SeoService) {
    super();
  }

  ngOnInit() {
    this.loadLaunchDetails();
    this.setSeoInfo();
  }

  private loadLaunchDetails() {
    this.activatedRoute.paramMap.pipe(
      filter((paramMap: ParamMap) => paramMap.has(RoutesNames.LaunchDetails)),
      map((paramMap: ParamMap) => paramMap.get(RoutesNames.LaunchDetails)),
      distinctUntilChanged(),
      tap((flightNumber: string) => this.store.dispatch(new LoadLaunchDetails(flightNumber))),
      takeUntil(this.componentDestroyed$)
    ).subscribe();
  }

  private setSeoInfo() {
    this.launch$.pipe(
      filter(Boolean),
      tap((launch: Launch) => {
        this.seoService.updateTitle(`${launch.mission_name} mission`);
        this.seoService.updateDescription(launch.details);
      }),
      takeUntil(this.componentDestroyed$)
    ).subscribe();
  }
}
