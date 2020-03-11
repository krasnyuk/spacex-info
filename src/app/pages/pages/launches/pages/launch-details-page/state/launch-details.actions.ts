export class LoadLaunchDetails {
  static readonly type = '[LaunchDetails] Load Launch Details';
  constructor(public flightNumber: string) { }
}
