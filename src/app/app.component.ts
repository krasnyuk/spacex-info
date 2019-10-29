import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PreloadImagesService} from "./core/services/preload-images.service";

@Component({
  selector: 'spx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private preloadImagesService: PreloadImagesService) {
    this.preloadImagesService.preloadImages([
      'assets/images/image-loading.gif',
    ]);
  }
}
