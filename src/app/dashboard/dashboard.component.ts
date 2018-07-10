import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public books: Book[];

  ngOnInit() {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Grundlagen, Fortgeschrittete',
      rating: 5
    },
    {
      isbn: '001',
      title: 'Angular JX1.x',
      description: 'das alte Framework',
      rating: 4
    },
    {
      isbn: '002',
      title: 'Krieg und Frieden',
      description: 'Test',
      rating: 3
    }];
  }

}
