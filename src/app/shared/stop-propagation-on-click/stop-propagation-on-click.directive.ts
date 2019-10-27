import {Directive, ElementRef, OnInit} from '@angular/core';
import {BaseUnsubscribe} from '../../core/base/base-unsubscribe';
import {fromEvent} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Directive({
  selector: '[spxStopPropagationOnClick]'
})
export class StopPropagationOnClickDirective extends BaseUnsubscribe implements OnInit {

  constructor(private elRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.stopPropagationOnClick();
  }

  private stopPropagationOnClick() {
    fromEvent(this.elRef.nativeElement, 'click').pipe(
      tap((event: MouseEvent) => event.stopPropagation()),
      takeUntil(this.unsubscribeOnDestroy$)
    ).subscribe();
  }
}
