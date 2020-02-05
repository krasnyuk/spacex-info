import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {SideNavWrapperPageComponent} from './pages/side-nav-wrapper-page/side-nav-wrapper-page.component';
import {
  MatButtonModule,
  MatExpansionModule, MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {HeaderComponent} from './components/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SideNavigationMenuComponent} from './components/side-navigation-menu/side-navigation-menu.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [SideNavWrapperPageComponent, HeaderComponent, SideNavigationMenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    SharedModule,
    MatIconModule
  ]
})
export class PagesModule {
}
