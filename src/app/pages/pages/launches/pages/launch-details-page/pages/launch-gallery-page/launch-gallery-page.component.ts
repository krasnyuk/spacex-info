import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select} from "@ngxs/store";
import {LaunchDetailsState} from "../../state/launch-details.state";
import {Observable} from "rxjs";
import {Launch} from "../../../../../../../models/launches/launch.model";

@Component({
  selector: 'spx-launch-gallery-page',
  templateUrl: './launch-gallery-page.component.html',
  styleUrls: ['./launch-gallery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchGalleryPageComponent implements OnInit {
  @Select(LaunchDetailsState.launchDetails) launch$: Observable<Launch | null>;

  constructor() { }

  ngOnInit() {
  }

}
