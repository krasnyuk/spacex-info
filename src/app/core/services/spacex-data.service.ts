import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Launch} from "../../models/launches/launch.model";

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private readonly apiUrl: string = 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {
  }

  public getLaunches(): Observable<Array<Launch>> {
    return this.httpClient.get<Array<Launch>>(this.apiUrl + 'launches');
  }
}
