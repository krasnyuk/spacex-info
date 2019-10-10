import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MenuItem} from "../../../models/navigation-menu/menu-item.model";
import {RoutesNames} from "../../../models/routing/routes-names.enum";

@Component({
  selector: 'spx-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavigationMenuComponent implements OnInit {
  readonly menuItems: Array<MenuItem> = [
    {
      title: 'Launches',
      subitems: [
        {
          title: 'All Launches',
          routerLink: [`/${RoutesNames.Launches}`]
        },
        {
          title: 'Next Launch',
          routerLink: [`/${RoutesNames.Launches}/${RoutesNames.NextLaunch}`]
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
