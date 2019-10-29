import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  LoadLaunches,
  SetLaunchesIsSuccessfulFilter,
  SetLaunchesOrderBy,
  SetLaunchesPageIndex,
  SetLaunchesPageSize,
  SetLaunchesSortByField
} from './launches.actions';
import {Launch} from "../../../../models/launches/launch.model";
import {ListWithPagingStateModel} from "../../../../models/state/list.state";
import {SpacexDataService} from "../../../../core/services/spacex-data.service";
import {tap} from "rxjs/operators";
import {ListResponse} from "../../../../models/api/response/list.response";
import {OrderBy} from "../../../../models/api/order-by.enum";
import {BooleanFilter} from "../../../../models/api/boolean-filter.enum";

export interface LaunchesStateModel extends ListWithPagingStateModel<Launch> {
  isSuccessfulFilter: BooleanFilter;
}

const initialState: LaunchesStateModel = {
  items: [],
  loading: false,
  pageIndex: 0,
  pageSize: 10,
  total: 0,
  orderBy: OrderBy.DESC,
  sortByField: 'launch_date_utc',
  isSuccessfulFilter: BooleanFilter.TRUE
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

  @Selector()
  static sortByField(state: LaunchesStateModel) {
    return state.sortByField;
  }

  @Selector()
  static orderBy(state: LaunchesStateModel) {
    return state.orderBy;
  }

  @Selector()
  static isSuccessfulFilter(state: LaunchesStateModel) {
    return state.isSuccessfulFilter;
  }

  constructor(private spacexDataService: SpacexDataService) {
  }

  @Action(LoadLaunches)
  LoadLaunches(ctx: StateContext<LaunchesStateModel>) {
    ctx.patchState({loading: true});
    const {pageIndex, pageSize, orderBy, sortByField} = ctx.getState();
    const additionalFilters: { [key: string]: string | boolean } = this.getAdditionalFilters(ctx);
    return this.spacexDataService.getLaunches(pageIndex, pageSize, sortByField, orderBy, additionalFilters).pipe(
      tap((response: ListResponse<Launch>) => ctx.patchState({
        loading: false,
        items: response.items,
        total: response.total
      }))
    );
  }

  private getAdditionalFilters(ctx: StateContext<LaunchesStateModel>): { [key: string]: string | boolean } {
    const additionalFilters = {};
    const isSuccessfulFilter: BooleanFilter = ctx.getState().isSuccessfulFilter;
    if (isSuccessfulFilter !== BooleanFilter.ALL) {
      additionalFilters['launch_success'] = isSuccessfulFilter;
    }
    return additionalFilters;
  }

  @Action(SetLaunchesPageIndex)
  SetLaunchesPageIndex(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesPageIndex) {
    ctx.patchState({pageIndex: action.pageIndex});
  }

  @Action(SetLaunchesPageSize)
  SetLaunchesPageSize(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesPageSize) {
    ctx.patchState({pageSize: action.pageSize});
  }

  @Action(SetLaunchesOrderBy)
  SetLaunchesOrderBy(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesOrderBy) {
    ctx.patchState({orderBy: action.orderBy});
  }

  @Action(SetLaunchesSortByField)
  SetLaunchesSortByField(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesSortByField) {
    ctx.patchState({sortByField: action.fieldName});
  }

  @Action(SetLaunchesIsSuccessfulFilter)
  SetLaunchesIsSuccessfulFilter(ctx: StateContext<LaunchesStateModel>, action: SetLaunchesIsSuccessfulFilter) {
    ctx.patchState({isSuccessfulFilter: action.isSuccessful});
  }
}
