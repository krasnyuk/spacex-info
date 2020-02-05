import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'spx-side-nav-wrapper-page',
  templateUrl: './side-nav-wrapper-page.component.html',
  styleUrls: ['./side-nav-wrapper-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavWrapperPageComponent implements OnInit {
  @ViewChild(MatSidenav, {static: true}) sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
