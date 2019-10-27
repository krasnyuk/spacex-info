import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterComponent } from './list-filter/list-filter.component';
import {MatPaginatorModule, MatSelectModule} from "@angular/material";



@NgModule({
  declarations: [ListFilterComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [ListFilterComponent]
})
export class ListFilterModule { }
