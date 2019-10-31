import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StopPropagationOnClickDirective} from "./directives/stop-propagation-on-click/stop-propagation-on-click.directive";
import { ImageLoaderDirective } from './directives/image-loader/image-loader.directive';
import { ExternalLinkDirective } from './directives/external-link.directive';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

const directives: Array<any> = [
  StopPropagationOnClickDirective,
  ImageLoaderDirective,
  ExternalLinkDirective,
];

const components: Array<any> = [
  CountdownTimerComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ]
})
export class SharedModule { }
