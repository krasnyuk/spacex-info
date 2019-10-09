import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spx-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
