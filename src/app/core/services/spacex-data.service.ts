import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Launch} from "../../models/launches/launch.model";
import {map} from "rxjs/operators";
import {ListResponse} from "../../models/api/response/list.response";
import {ApiEndpoints} from "../../models/api/api-endpoints";
import {ApiUtils} from "../utils/api.utils";
import {OrderBy} from "../../models/api/order-by.enum";

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private readonly apiUrl: string = 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {
  }

  getLaunches(pageIndex: number,
              pageSize: number,
              sortByField: string,
              order: OrderBy,
              filters: { [key: string]: string | boolean } = {}): Observable<ListResponse<Launch>> {
    const offset: number = pageIndex * pageSize;
    const params = {
      offset: offset.toString(),
      limit: pageSize.toString(),
      sort: sortByField,
      order,
      ...filters
    };
    const url: string = this.apiUrl + ApiEndpoints.Launches;
    return this.httpClient.get<Array<Launch>>(url, {params, observe: 'response'}).pipe(
      map((response: HttpResponse<Array<Launch>>) => ApiUtils.extractTotalFromListResponse<Launch>(response))
    );
  }

  getLaunch(flightNumber: string): Observable<Launch> {
    const url: string = this.apiUrl + ApiEndpoints.Launches + `/${flightNumber}`;
    return this.httpClient.get<Launch>(url);
  }

}
