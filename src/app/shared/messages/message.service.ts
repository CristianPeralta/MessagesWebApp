import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const MESSAGES_API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<Message> {
    return this.http.get<Message>(MESSAGES_API_URL + '/messages')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
