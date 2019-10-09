import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'spx-launches',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesPageComponent implements OnInit {
  launches$: Observable<Array<any>> = of([1, 2, 3, 5, 5, 6]);
  constructor() { }

  ngOnInit() {
  }

}
