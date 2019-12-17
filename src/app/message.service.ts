import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const MESSAGES_API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private http: HttpClient
  ) { }

  getMessages() {
    return new Promise((resolve) => {
      this.http.get(`${MESSAGES_API_URL}/messages`).subscribe(resolve);
    });
  }
}
