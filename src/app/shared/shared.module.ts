import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StopPropagationOnClickDirective} from "./directives/stop-propagation-on-click/stop-propagation-on-click.directive";
import {ImageLoaderDirective} from './directives/image-loader/image-loader.directive';
import {ExternalLinkDirective} from './directives/external-link.directive';
import { CountDownTimerDirective } from './directives/count-down-timer.directive';
import { BackgroundImageDirective } from './directives/background-image/background-image.directive';
import { MediaPipe } from './pipes/media.pipe';

const directives: Array<any> = [
  StopPropagationOnClickDirective,
  ImageLoaderDirective,
  ExternalLinkDirective,
  CountDownTimerDirective,
  BackgroundImageDirective,
];

const pipes: Array<any> = [
  MediaPipe,
];

const components: Array<any> = [
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...directives,
    ...components,
    ...pipes
  ],
  exports: [
    ...directives,
    ...components,
    ...pipes
  ]
})
export class SharedModule { }
