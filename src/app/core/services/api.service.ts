import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { CommonService } from "../utilities/common.helper";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}/${path}`, { params });
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    var bodyCopy=Object.assign({}, body);
    return this.http.put<T>(
      `${environment.api_url}/${path}`,
      JSON.stringify(CommonService.replaceDateToStringBeforeStringify(bodyCopy))
    );
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    var bodyCopy=Object.assign({}, body);
    console.log(environment.api_url);
    return this.http.post<T>(
      `http://ec2-54-169-155-55.ap-southeast-1.compute.amazonaws.com/api/${path}`,
      bodyCopy
    );
  }

  postArray<T>(path: string, body): Observable<T> {
    return this.http.post<T>(
      `${environment.api_url}/${path}`,
      JSON.stringify(body)
    );
  }
  // post<T>(path: string, body: Object = {}): Observable<T> {
  //   return this.http.post<T>(
  //     `${environment.api_url}${path}`,
  //     JSON.stringify(body)
  //   ).pipe(catchError(this.formatErrors));
  // }

  delete<T>(path): Observable<T> {
    return this.http.delete<T>(`${environment.api_url}/${path}`);
  }

  postExportXML<T>(path: string, body: Object = {}): Observable<T> {
    var bodyCopy=Object.assign({}, body);
    return this.http.post<T>(
      `${environment.api_url}/${path}`,
      JSON.stringify(CommonService.replaceDateToStringBeforeStringify(bodyCopy)), {
        responseType: 'arrayBuffer' as 'json', headers: null
      }
    );
  }

  postExportExcel<T>(path: string, body: Object = {}): Observable<T> {
    var bodyCopy=Object.assign({}, body);
    return this.http.post<T>(
      `${environment.api_url}/${path}`,
      JSON.stringify(CommonService.replaceDateToStringBeforeStringify(bodyCopy)), {
        responseType: 'arrayBuffer' as 'json', headers: null
      }
    );
  }

  postExportPdf<T>(path: string, body: Object = {}): Observable<T> {
    var bodyCopy=Object.assign({}, body);
    return this.http.post<T>(
      `${environment.api_url}/${path}`,
      JSON.stringify(CommonService.replaceDateToStringBeforeStringify(bodyCopy)), {
        responseType: 'arrayBuffer' as 'json', headers: null
      }
    );
  }
}
