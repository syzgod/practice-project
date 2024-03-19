import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Subscribers } from './subscribers/subscribers.model';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private apiUrl =
    'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

  constructor(private http: HttpClient) {}

  getSubscribers(): Observable<Subscribers[]> {
    return this.http
      .get<Subscribers[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
