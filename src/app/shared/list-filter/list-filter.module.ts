import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterComponent } from './list-filter/list-filter.component';
import {MatCardModule, MatExpansionModule, MatPaginatorModule, MatSelectModule} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
    MatExpansionModule
  ],
  exports: [ListFilterComponent]
})
export class ListFilterModule { }
