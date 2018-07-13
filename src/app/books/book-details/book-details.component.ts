import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // isbn: string;
  // isbn$: Observable<string>;
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // route.snapshot kein reload bei gleichem Pfad
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // this.route.paramMap.subscribe(params => this.isbn = params.get('isbn'));


    // mergeMap: kein Warten, Reihenfolge kann varieren
    // cancatMap: langsamer Responses werden sortiert
    // switchMap: verwirft Requests wenn nur der letzte Wert wichtig ist

    this.book$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => this.bs.get(isbn)),
      retry(3)
    );

  }



}
