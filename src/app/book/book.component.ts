import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  /**
   *
   */
  constructor(private rs: BookRatingService) {

  }

  @Input() book: Book = {} as Book;
  @Output() rate = new EventEmitter<Book>(true); // true = async aktiv

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    // this.book = ratedBook;
    this.rate.emit(ratedBook);  // asyncrone Aufrufe ans Ende
  }

  rateDown() {
    const ratedBook = this.rs.rateDown(this.book);
    // this.book = ratedBook;
    this.rate.emit(ratedBook);
  }

}
