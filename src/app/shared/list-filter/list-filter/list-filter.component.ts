import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material";

@Component({
  selector: 'spx-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListFilterComponent implements OnInit {
  readonly pageSizeOptions: Array<number> = [5, 10, 25, 100];

  @Input() listLength: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Output() pageChange = new EventEmitter<PageEvent>();

  constructor() {
  }

  ngOnInit() {
  }

}
