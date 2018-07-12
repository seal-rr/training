import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root' // Angular 6 way .. ist aber bei TestBed mit drin
})

export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(this.maxRating, book.rating + 1)
    };

    /*
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
    */
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: book.rating > this.minRating ? book.rating - 1 : book.rating
    };

    /*
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
    */
  }
}
