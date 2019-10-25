export interface ListStateModel<T = any> {
  items: Array<T>;
  total: number;
  loading: boolean;
}

export interface ListWithPagingStateModel<T = any> extends ListStateModel<T> {
  pageSize: number;
  pageIndex: number;
}
