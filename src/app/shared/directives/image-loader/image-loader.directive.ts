import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[spxImageLoader]'
})
export class ImageLoaderDirective implements OnInit {

  @Input() public loader: string = 'assets/images/image-placeholder.jpg';
  @Input() public onErrorSrc: string = 'assets/images/img-not-found.jpg';

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }


  ngOnInit(): void {
    this.initHostImageLoader();
  }

  private initHostImageLoader(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.loader);
  }

  @HostListener('load') onLoad() {
    //this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.src);
  }

  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.onErrorSrc);
  }
}
