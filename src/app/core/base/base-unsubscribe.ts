import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

export abstract class BaseUnsubscribe implements OnDestroy {
  private unsubscribeOnDestroy = new Subject();
  protected unsubscribeOnDestroy$ = this.unsubscribeOnDestroy.asObservable();

  ngOnDestroy(): void {
    this.unsubscribeOnDestroy.next();
    this.unsubscribeOnDestroy.complete();
  }
}
