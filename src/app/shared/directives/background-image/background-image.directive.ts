import {Directive, HostBinding, Input, OnChanges} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Directive({
  selector: '[spxBackgroundImage]'
})
export class BackgroundImageDirective implements OnChanges {
  @Input('spxBackgroundImage') imageUrl: string;

  @HostBinding('style.background-image') backgroundImageStyle: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnChanges(): void {
    this.backgroundImageStyle = this.getBackgroundImageStyle();
  }

  private getBackgroundImageStyle(): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(`url('${this.imageUrl}')`);
  }
}
