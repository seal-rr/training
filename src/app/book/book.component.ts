import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Komponente prüft nur seine lokalen Events und reicht diese an seine Kinder weiter.
  // Ansonsten würde sie auf alle Events hören und nicht weiterreichen
  // None als eigene CD evtl. sinnvoll wenn nur statische Inhalte
})
export class BookComponent {

  /**
   *
   */
  constructor(private rs: BookRatingService) {

  }

  @Input() book: Book;
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
