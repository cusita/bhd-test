/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams | { [params: string]: any };
}

@Injectable()
export class HttpService {

   constructor(private readonly httpClient: HttpClient) {}

   public post<T, R>(endpoint: string, params: T, hasToken = true): Promise<R> {

    const headers = this.prepareHeaders(hasToken);

    return this.httpClient.post<R>(endpoint, params, { headers }).toPromise();
   }

   private prepareHeaders(hasToken = true): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    const token = '4cJ&PKTqSb0b3d94f92d91337842a406fffdff2df1207edbba86d06a2007693886239f371';

    if (hasToken) {
      headers.set('Authorization', `Bearer ${ token }`);
    }

    return headers;
  }

  public get<T>(serviceUrl: string, opts?: Options): Observable<T> {
    const ropts = this.createOptions(opts);

    return this.httpClient
      .get(serviceUrl, ropts)
      .pipe(map((response) => response as T));
  }

  private createOptions(opts: Options): Options {
    const defaultOpts: Options = this.createDefaultOptions();

    if (opts) {
      opts = {
        params: opts.params || defaultOpts.params,
        headers: opts.headers || defaultOpts.headers,
      };

      if (!opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = defaultOpts.headers['Content-Type'];
      }
    }

    return opts || defaultOpts;
  }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }
}
