import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import {MatSidenavModule, MatToolbarModule} from "@angular/material";
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';


@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent, SideNavigationMenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
