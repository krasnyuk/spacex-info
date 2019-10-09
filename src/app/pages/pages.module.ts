import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import {MatToolbarModule} from "@angular/material";


@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule
  ]
})
export class PagesModule { }
