import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterComponent } from './list-filter/list-filter.component';
import {MatCardModule, MatExpansionModule, MatIconModule, MatPaginatorModule, MatSelectModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StopPropagationOnClickModule} from "../stop-propagation-on-click/stop-propagation-on-click.module";



@NgModule({
  declarations: [ListFilterComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    StopPropagationOnClickModule
  ],
  exports: [ListFilterComponent]
})
export class ListFilterModule { }
