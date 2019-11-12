import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RocketsListPageComponent} from "./pages/rockets-list-page/rockets-list-page.component";


const routes: Routes = [
  {
    path: '',
    component: RocketsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
