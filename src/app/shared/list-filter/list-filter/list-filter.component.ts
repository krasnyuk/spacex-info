import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material";
import {KeyValue} from "@angular/common";
import {OrderBy} from "../../../models/api/order-by.enum";
import {FormControl} from "@angular/forms";
import {BaseUnsubscribe} from "../../../core/base/base-unsubscribe";
import {distinctUntilChanged, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'spx-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListFilterComponent extends BaseUnsubscribe implements OnInit {
  readonly orderByControl: FormControl = new FormControl(null);
  readonly sortByFieldControl: FormControl = new FormControl(null);
  readonly pageSizeOptions: Array<number> = [5, 10, 25, 100];
  readonly orderByList: Array<KeyValue<string, OrderBy>> = [
    {
      value: OrderBy.ASC,
      key: 'ASC'
    },
    {
      value: OrderBy.DESC,
      key: 'DESC'
    }
  ];

  @Input() listLength: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Input() sortByFieldList: Array<KeyValue<string, string>> = [];
  @Input() loading: boolean;

  @Input() set orderBy(orderBy: OrderBy) {
    this.orderByControl.setValue(orderBy);
  }

  @Input() set sortByField(fieldName: string) {
    this.sortByFieldControl.setValue(fieldName);
  }

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() sortByFieldChange = new EventEmitter<string>();
  @Output() orderByChange = new EventEmitter<OrderBy>();

  constructor() {
    super();
  }

  ngOnInit() {
    this.onOrderByChange();
    this.onSortByChange();
  }

  private onOrderByChange() {
    this.orderByControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap((orderBy: OrderBy) => {
        this.orderByChange.emit(orderBy);
      }),
      takeUntil(this.unsubscribeOnDestroy$)
    ).subscribe();
  }

  private onSortByChange() {
    this.sortByFieldControl.valueChanges.pipe(
      distinctUntilChanged(),
      tap((fieldName: string) => {
        this.sortByFieldChange.emit(fieldName);
      }),
      takeUntil(this.unsubscribeOnDestroy$)
    ).subscribe();
  }
}
