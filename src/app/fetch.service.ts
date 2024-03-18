import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Subscribers } from './post/post.model';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private apiUrl =
    'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Subscribers[]> {
    return this.http
      .get<Subscribers[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
