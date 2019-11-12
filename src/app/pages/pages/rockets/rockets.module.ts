import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketsListPageComponent } from './pages/rockets-list-page/rockets-list-page.component';
import {MatCardModule, MatChipsModule, MatIconModule, MatTooltipModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [RocketsListPageComponent, RocketCardComponent],
  imports: [
    CommonModule,
    RocketsRoutingModule,
    MatCardModule,
    FlexModule,
    SharedModule,
    MatTooltipModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class RocketsModule { }
