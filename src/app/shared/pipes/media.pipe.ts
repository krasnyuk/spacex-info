import { Pipe, PipeTransform } from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  constructor(private mediaObserver: MediaObserver) {}

  transform(value: string | string[]): boolean {
    return this.mediaObserver.isActive(value);
  }

}
