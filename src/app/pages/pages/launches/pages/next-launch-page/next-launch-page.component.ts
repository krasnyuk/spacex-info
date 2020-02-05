import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Observable} from "rxjs";
import {Launch} from "../../../../../models/launches/launch.model";
import {SeoService} from "../../../../../core/services/seo.service";
import {BaseUnsubscribe} from "../../../../../core/base/base-unsubscribe";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'spx-next-launch-page',
  templateUrl: './next-launch-page.component.html',
  styleUrls: ['./next-launch-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextLaunchPageComponent extends BaseUnsubscribe implements OnInit {
  launch$: Observable<Launch>;

  constructor(private spacexDataService: SpacexDataService, private seoService: SeoService) {
    super();
  }

  ngOnInit() {
    this.loadNextLaunch();
    this.setSeoInfo();
  }

  private loadNextLaunch() {
    this.launch$ = this.spacexDataService.getNextLaunch();
  }

  private setSeoInfo() {
    this.launch$.pipe(
      tap((launch: Launch) => {
        const title: string = `Next Launch | Mission: ${launch.mission_name} | SpaceX Info`;
        const description: string = `SpaceX next launch date: ${launch.launch_date_utc}. Details: ${launch.details}`;
        this.seoService.updateTitle(title);
        this.seoService.updateDescription(description);
      }),
      takeUntil(this.componentDestroyed$)
    ).subscribe();
  }
}
