import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {SpacexDataService} from "../../../../../core/services/spacex-data.service";
import {Observable} from "rxjs";
import {Rocket} from "../../../../../models/rockets/rocket.model";
import {listFadeAnimation} from "../../../../../core/animations/list.animation";

@Component({
  selector: 'spx-rockets-list-page',
  templateUrl: './rockets-list-page.component.html',
  styleUrls: ['./rockets-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: listFadeAnimation
})
export class RocketsListPageComponent implements OnInit {
  rockets$: Observable<Array<Rocket>>;

  constructor(private spacexDataService: SpacexDataService) { }

  ngOnInit() {
    this.rockets$ = this.spacexDataService.getRockets();
  }

}
