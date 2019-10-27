import {Action, Selector, State, StateContext} from '@ngxs/store';
import {LoadLaunches, SetLaunchesPageIndex, SetLaunchesPageSize} from './launches.actions';
import {Launch} from "../../../../models/launches/launch.model";
import {ListWithPagingStateModel} from "../../../../models/state/list.state";
import {SpacexDataService} from "../../../../core/services/spacex-data.service";
import {tap} from "rxjs/operators";
import {ListResponse} from "../../../../models/api/response/list.response";

export interface LaunchesStateModel extends ListWithPagingStateModel<Launch> {
}

const initialState: LaunchesStateModel = {
  items: [],
  loading: false,
  pageIndex: 0,
  pageSize: 5,
  total: 0,
};

@State<LaunchesStateModel>({
  name: 'launches',
  defaults: initialState
})
export class LaunchesState {

  @Selector()
  static launches(state: LaunchesStateModel) {
    return state.items;
  }

  @Selector()
  static loading(state: LaunchesStateModel) {
    return state.loading;
  }

  @Selector()
  static allLaunchesTotal(state: LaunchesStateModel) {
    return state.total;
  }

  @Selector()
  static pageIndex(state: LaunchesStateModel) {
    return state.pageIndex;
  }

  @Selector()
  static pageSize(state: LaunchesStateModel) {
    return state.pageSize;
  }

  constructor(private spacexDataService: SpacexDataService) {
  }

  @Action(LoadLaunches)
  LoadLaunches(ctx: StateContext<LaunchesStateModel>) {
    ctx.patchState({loading: true});
    const {pageIndex, pageSize} = ctx.getState();
    return this.spacexDataService.getLaunches(pageIndex, pageSize).pipe(
      tap((response: ListResponse<Launch>) => ctx.patchState({
        loading: false,
        items: response.items,
        total: response.total
      }))
    );
  }

  @Action(SetLaunchesPageIndex)
  SetLaunchesPageIndex(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesPageIndex) {
    ctx.patchState({pageIndex: action.pageIndex});
  }

  @Action(SetLaunchesPageSize)
  SetLaunchesPageSize(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesPageSize) {
    ctx.patchState({pageSize: action.pageSize});
  }
}
