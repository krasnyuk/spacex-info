import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopPropagationOnClickDirective } from './stop-propagation-on-click.directive';



@NgModule({
  declarations: [StopPropagationOnClickDirective],
  imports: [
    CommonModule
  ],
  exports: [
    StopPropagationOnClickDirective
  ]
})
export class StopPropagationOnClickModule { }
