// Angular
import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';

// App
import { AddBookGQL, Book, BooksGQL } from '../graphql.service';
import { AppState } from '../store/books.types';
import { selectBooks } from '../store/books.selectors';
import { setBooks } from '../store/books.actions';


/**
 * Books Component
 *
 * @param booksGql - The books GraphQL
 * @param addBookGql - The add books GraphQL
 * @param store - The NgRx store
 * @returns The books component instance
 */
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<Maybe<Book[]> | undefined>;

  title: string;
  author: string;

  /**
   * Books Component constructor
   */
  constructor(
    private readonly booksGql: BooksGQL,
    private readonly addBookGql: AddBookGQL,
    private readonly store: Store<AppState>,
  ) {}

  /**
   * OnInit lifecycle method implementation
   * Sets the books observable abd fetches the books, updating the store
   */
  ngOnInit(): void {
    this.books$ = this.store.select(selectBooks);

    this.booksGql
      .fetch()
      .subscribe(
        ({ data }) => {
          const books = data.books ?? [];

          this.store.dispatch(setBooks({ books }));
        },
      );
  }

  /**
   * Adds a book via GraphQL based on the form input values
   */
  addBook() {
    this.addBookGql
      .mutate({
        title: this.title,
        author: this.author,
      })
      .subscribe();
  }
}
