import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

// import { filter } from 'rxjs';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public books: Book[] = [];

  /**
   *
   */
  constructor(private bs: BookStoreService) {


  }

  ngOnInit() {

    this.bs.getAll()
      .pipe()
      .subscribe(books => { this.books = books; });  // unsubscribe nicht notwendig, da http observable

    // this.books = [{
    //   isbn: '000',
    //   title: 'Angular',
    //   description: 'Grundlagen, Fortgeschrittete',
    //   rating: 5
    // },
    // {
    //   isbn: '001',
    //   title: 'Angular JX1.x',
    //   description: 'das alte Framework',
    //   rating: 4
    // },
    // {
    //   isbn: '002',
    //   title: 'Krieg und Frieden',
    //   description: 'Test',
    //   rating: 3
    // }];
  }

  reorderBooks(book: Book) {
    console.log('Zur Info: ', book);

    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);

    // option B
    /*
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    this.books = [...cleanedList, book]
    .sort((a,b) => b.rating - a.rating);
    */

  }

  addBook(book: Book) {
    this.books = [...this.books, book]; // book added at end of array
  }

  getNumBooks() {
    return this.books.length;
  }

}
