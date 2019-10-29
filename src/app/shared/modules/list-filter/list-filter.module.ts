import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListFilterComponent} from './list-filter.component';
import {
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule
} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";


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
    MatProgressBarModule,
    SharedModule
  ],
  exports: [ListFilterComponent]
})
export class ListFilterModule { }
