import { Injectable } from '@angular/core';

import { Book } from './book';



@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    const myBook = {} as Book;
    myBook.description = book.description;
    myBook.isbn = book.isbn;
    myBook.title = book.title;
    if (book.rating < 5) {
      myBook.rating = (book.rating + 1);
    } else {
      myBook.rating = 5;
    }
    return myBook;
  }

  rateDown(book: Book): Book {
    const myBook = {} as Book;
    myBook.description = book.description;
    myBook.isbn = book.isbn;
    myBook.title = book.title;
    if (book.rating > 1) {
      myBook.rating = (book.rating - 1);
    } else {
      myBook.rating = 1;
    }
    return myBook;
  }
}
