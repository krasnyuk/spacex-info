import {HttpResponse} from "@angular/common/http";
import {ListResponse} from "../../models/api/response/list.response";
import {HeadersNames} from "../../models/api/headers.names";

export class ApiUtils {
  static extractTotalFromListResponse<T>(response: HttpResponse<Array<T>>): ListResponse<T> {
    const totalHeader: string | null = response.headers.get(HeadersNames.spacexListTotal);
    const listTotal: number = totalHeader !== null ? parseInt(totalHeader) : 0;
    return {
      total: listTotal,
      items: response.body
    };
  }
}
