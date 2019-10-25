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

