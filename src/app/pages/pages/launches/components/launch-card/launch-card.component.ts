import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spx-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
