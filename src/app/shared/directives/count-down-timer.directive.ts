import {Directive, ElementRef, Input, NgZone} from '@angular/core';
import {merge, Subject, timer} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";
import {BaseUnsubscribe} from "../../core/base/base-unsubscribe";

@Directive({
  selector: '[spxCountDownTimer]'
})
export class CountDownTimerDirective extends BaseUnsubscribe {
  private timerLabelFormatted: string;
  private dateExpired = new Subject();
  private readonly timerDelay: number = 0;

  @Input('spxCountDownTimer') countDownDate: Date | string;
  @Input() timerInterval: number = 1000;
  @Input() timerExpiredLabel: string = 'Expired';
  @Input() timerLabelPattern: string = '{days}d {hours}h {minutes}m {seconds}s';

  constructor(private ngZone: NgZone, private elementRef: ElementRef<HTMLElement>) {
    super();
  }

  ngOnInit() {
    this.initTimer();
  }

  private initTimer() {
    this.ngZone.runOutsideAngular(() => {
      timer(this.timerDelay, this.timerInterval).pipe(
        tap(() => this.updateTimerValue()),
        takeUntil(merge(this.dateExpired, this.componentDestroyed$))
      ).subscribe();
    });
  }

  private updateTimerValue(): void {
    const countDownDateTime: number = this.getCountDownDateTime();
    const now: number = new Date().getTime();
    const datesDiff: number = countDownDateTime - now;
    const days: number = this.getDays(datesDiff);
    const hours: number = this.getHours(datesDiff);
    const minutes: number = this.getMinutes(datesDiff);
    const seconds: number = this.getSeconds(datesDiff);
    if (datesDiff < 0) {
      this.dateExpired.next();
      this.timerLabelFormatted = this.timerExpiredLabel;
    }
    this.timerLabelFormatted = this.getTimerLabelFormatted(days, hours, minutes, seconds);
    this.elementRef.nativeElement.innerText = this.timerLabelFormatted;
  }

  private getTimerLabelFormatted(days: number, hours: number, minutes: number, seconds: number): string {
    return this.timerLabelPattern
      .replace('{days}', days.toString())
      .replace('{hours}', hours.toString())
      .replace('{minutes}', minutes.toString())
      .replace('{seconds}', seconds.toString());
  }

  private getSeconds(datesDiff: number) {
    return Math.floor((datesDiff % (1000 * 60)) / 1000);
  }

  private getMinutes(datesDiff: number) {
    return Math.floor((datesDiff % (1000 * 60 * 60)) / (1000 * 60));
  }

  private getHours(datesDiff: number) {
    return Math.floor((datesDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  private getDays(datesDiff: number): number {
    return Math.floor(datesDiff / (1000 * 60 * 60 * 24));
  }

  private getCountDownDateTime(): number {
    return typeof this.countDownDate === 'string' ? new Date(this.countDownDate).getTime() : this.countDownDate.getTime();
  }

}
