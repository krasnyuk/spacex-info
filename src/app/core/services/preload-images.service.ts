import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloadImagesService {

  constructor() {
  }

  public preloadImages(imagesLinks: Array<string>): Promise<any> {
    /* preload images for browser cache and immediate displaying when needed */
    const images: Array<Promise<void>> = imagesLinks.map((link: string) => this.loadImage(link));
    return Promise.all(images);

  }

  private loadImage(imageSrc: string): Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => resolve();
    });
  }
}
