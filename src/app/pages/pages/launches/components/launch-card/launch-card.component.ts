import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Launch} from "../../../../../models/launches/launch.model";

@Component({
  selector: 'spx-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchCardComponent implements OnInit {
  @Input() launch: Launch;

  constructor() {
  }

  ngOnInit() {
  }

}
