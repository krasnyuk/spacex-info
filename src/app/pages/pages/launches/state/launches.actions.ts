import {OrderBy} from "../../../../models/api/order-by.enum";
import {BooleanFilter} from "../../../../models/api/boolean-filter.enum";

export class LoadLaunches {
  static readonly type = '[Launches] Load Launches';
}

export class SetLaunchesPageSize {
  static readonly type = '[Launches] Set Launches Page Size';

  constructor(public pageSize: number) {
  }
}

export class SetLaunchesPageIndex {
  static readonly type = '[Launches] Set Launches Page Index';

  constructor(public pageIndex: number) {
  }
}

export class SetLaunchesSortByField {
  static readonly type = '[Launches] Set Launches Sort By Field';

  constructor(public fieldName: string) {
  }
}

export class SetLaunchesOrderBy {
  static readonly type = '[Launches] Set Launches Order By';

  constructor(public orderBy: OrderBy) {
  }
}

export class SetLaunchesIsSuccessfulFilter {
  static readonly type = '[Launches] Set Launches Is Successful Filter';

  constructor(public isSuccessful: BooleanFilter) {
  }
}

