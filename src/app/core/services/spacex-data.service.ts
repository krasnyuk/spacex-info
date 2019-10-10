import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Launch} from "../../models/launches/launch.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private readonly apiUrl: string = 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {
  }

  public getLaunches(pageIndex: number, pageSize: number): Observable<Array<Launch>> {
    const params = {
      offset: pageIndex.toString(),
      limit: pageSize.toString()
    };
    return this.httpClient.get<Array<Launch>>(this.apiUrl + 'launches', {params});
  }

  public getLaunchesTotalCount(): Observable<number> {
    /* TODO: Since API don't provide total count now I should calculate total number manually */
    return this.httpClient.get<Array<Partial<Launch>>>(this.apiUrl + 'launches', {
      params: {filter: 'flight_number'}
    }).pipe(
      map((launches: Array<Partial<Launch>>) => launches.length)
    );
  }
}
