import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookStoreService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>('https://api.angular.schule/books')
      .pipe(
        retry(3),  // .share() --> wenn mehr als eine Subscription
        // ... async im html erzeugt neue Subscription ... daher möglichst nur 1x async im html!!
        catchError(() => of([{
          isbn: '000',
          title: 'KeinBuch',
          description: 'Sorry',
          rating: 5
        }])));
  }

  /*
  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>('https://api.angular.schule/book/${isbn}');
    */
}
