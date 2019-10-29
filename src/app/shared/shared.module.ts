import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StopPropagationOnClickDirective} from "./directives/stop-propagation-on-click/stop-propagation-on-click.directive";
import { ImageLoaderDirective } from './directives/image-loader/image-loader.directive';

const directives: Array<any> = [
  StopPropagationOnClickDirective,
  ImageLoaderDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...directives,
  ],
  exports: [
    ...directives
  ]
})
export class SharedModule { }
