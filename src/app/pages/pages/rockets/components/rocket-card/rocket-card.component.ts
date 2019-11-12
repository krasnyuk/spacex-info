import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Rocket} from "../../../../../models/rockets/rocket.model";

@Component({
  selector: 'spx-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketCardComponent implements OnInit {
  @Input() rocket: Rocket;

  constructor() { }

  ngOnInit() {
  }

}
