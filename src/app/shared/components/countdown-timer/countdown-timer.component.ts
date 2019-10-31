/* tslint:disable:quotemark */
import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input} from '@angular/core';
import {interval, merge, Subject, timer} from "rxjs";
import {BaseUnsubscribe} from "../../../core/base/base-unsubscribe";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'spx-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent extends BaseUnsubscribe implements OnInit {
  timerValue: string;
  private dateExpired = new Subject();

  @Input() timerInterval: number = 1000;
  @Input() countDownDate: Date | string;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
    super();
  }

  ngOnInit() {
    this.cdr.detach();
    this.initTimer();
  }

  private initTimer() {
    this.ngZone.runOutsideAngular(() => {
      timer(0, this.timerInterval).pipe(
        tap(() => {
          const countDownDateTime: number = this.getCountDownDateTime();
          const now = new Date().getTime();
          const datesDiff: number = countDownDateTime - now;
          const days = Math.floor(datesDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((datesDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((datesDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((datesDiff % (1000 * 60)) / 1000);
          if (datesDiff < 0) {
            this.dateExpired.next();
            this.timerValue = "EXPIRED";
          }
          this.timerValue = days + 'd ' + hours + "h " + minutes + "m " + seconds + "s ";
          this.cdr.detectChanges();
        }),
        takeUntil(merge(this.dateExpired, this.unsubscribeOnDestroy$))
      ).subscribe();
    });
  }

  private getCountDownDateTime(): number {
    return typeof this.countDownDate === 'string' ? new Date(this.countDownDate).getTime() : this.countDownDate.getTime();
  }
}
