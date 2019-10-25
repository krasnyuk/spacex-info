import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Launch} from "../../models/launches/launch.model";
import {map} from "rxjs/operators";
import {ListResponse} from "../../models/api/response/list.response";
import {ApiEndpoints} from "../../models/api/api-endpoints";
import {ApiUtils} from "../utils/api.utils";

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private readonly apiUrl: string = 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {
  }

  public getLaunches(pageIndex: number, pageSize: number): Observable<ListResponse<Launch>> {
    const offset: number = pageIndex * pageSize;
    const params = {
      offset: offset.toString(),
      limit: pageSize.toString()
    };
    return this.httpClient.get<Array<Launch>>(this.apiUrl + ApiEndpoints.Launches, {params, observe: 'response'}).pipe(
      map((response: HttpResponse<Array<Launch>>) => ApiUtils.extractTotalFromListResponse<Launch>(response))
    );
  }
}
