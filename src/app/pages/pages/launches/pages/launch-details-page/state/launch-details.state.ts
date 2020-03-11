import {Action, Selector, State, StateContext} from '@ngxs/store';
import {LoadLaunchDetails} from './launch-details.actions';
import {Launch} from "../../../../../../models/launches/launch.model";
import {SpacexDataService} from "../../../../../../core/services/spacex-data.service";
import {tap} from "rxjs/operators";

export interface LaunchDetailsStateModel {
  launch: Launch | null;
  isLoading: boolean;
}

const initialState: LaunchDetailsStateModel = {
  launch: null,
  isLoading: false
};

@State<LaunchDetailsStateModel>({
  name: 'launchDetails',
  defaults: initialState
})
export class LaunchDetailsState {

  @Selector()
  static launchIsLoading(state: LaunchDetailsStateModel): boolean {
    return state.isLoading;
  }

  @Selector()
  static launchDetails(state: LaunchDetailsStateModel): Launch | null {
    return state.launch;
  }

  constructor(private spacexDataService: SpacexDataService) {}

  @Action(LoadLaunchDetails)
  LoadLaunchDetails(ctx: StateContext<LaunchDetailsStateModel>, action: LoadLaunchDetails) {
    ctx.patchState({isLoading: true, launch: null});
    return this.spacexDataService.getLaunch(action.flightNumber).pipe(
      tap((launch: Launch) => ctx.patchState({isLoading: false, launch}))
    );
  }
}
