import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {BaseUnsubscribe} from "../../../core/base/base-unsubscribe";
import {fromEvent} from "rxjs";
import {take, takeUntil} from "rxjs/operators";

@Directive({
  selector: 'img[spxImageLoader]'
})
export class ImageLoaderDirective extends BaseUnsubscribe implements OnInit {

  @Input() loadingSrc: string = 'assets/images/image-loading.gif';
  @Input() onErrorSrc: string = 'assets/images/image-not-found.jpg';
  @Input('src') public imageSrc: string;

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.showLoaderImage();
    this.loadOriginalImage();
    this.onLoadError();
  }

  private showLoaderImage() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.loadingSrc);
  }

  private loadOriginalImage() {
    if (this.imageSrc) {
      const image = new Image();
      image.onload = () => this.renderer.setAttribute(this.el.nativeElement, 'src', image.src);
      image.src = this.imageSrc;
    }
  }

  private onLoadError(): void {
    fromEvent(this.el.nativeElement, 'error').pipe(
      take(1),
      takeUntil(this.unsubscribeOnDestroy$)
    ).subscribe(() => {
      const imageSrc: string = this.onErrorSrc;
      this.renderer.setAttribute(this.el.nativeElement, 'src', imageSrc);
    });
  }
}
