import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  @Output()
  createBook = new EventEmitter<Book>();

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  submitForm() {
    this.createBook.emit({
      ...this.bookForm.value,
      rating: 1
    });
    this.bookForm.reset();
  }

}
