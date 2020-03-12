import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select} from "@ngxs/store";
import {LaunchDetailsState} from "../../state/launch-details.state";
import {Observable} from "rxjs";

@Component({
  selector: 'spx-launch-video-page',
  templateUrl: './launch-video-page.component.html',
  styleUrls: ['./launch-video-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchVideoPageComponent implements OnInit {

  @Select(LaunchDetailsState.launchYoutubeVideoId) launchYoutubeVideoId$: Observable<string | null>;

  constructor() { }

  ngOnInit() {
  }

}
