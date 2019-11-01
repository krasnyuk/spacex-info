import {OnDestroy} from "@angular/core";
import {Observable, Subject} from "rxjs";

export abstract class BaseUnsubscribe implements OnDestroy {
  private unsubscribeOnDestroy = new Subject<void>();
  protected componentDestroyed$: Observable<void> = this.unsubscribeOnDestroy.asObservable();

  ngOnDestroy(): void {
    this.unsubscribeOnDestroy.next();
    this.unsubscribeOnDestroy.complete();
  }
}
