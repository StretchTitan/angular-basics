import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddBookGQL, BooksGQL } from '../graphql.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<any>;

  title: string;
  author: string;

  constructor(private booksGql: BooksGQL, private addBookGql: AddBookGQL) { }

  ngOnInit(): void {    
    this.books$ = this.booksGql.fetch().pipe(map(res => res.data.books));
  }

  addBook() {
    this.addBookGql.mutate({
      title: this.title,
      author: this.author
    }).subscribe();
  }
}
