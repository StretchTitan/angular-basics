// Angular
import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from 'rxjs';

// NgRx
import { Store } from '@ngrx/store';

// Books
import { AppState } from '../store/books.types';
import { Books } from '../graphql.service';
import { selectBooks } from '../store/books.selectors';


/**
 * BooksList Component
 *
 * @param store - The NgRx store
 * @returns The books component instance
 */
@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})
export class BooksListComponent implements OnInit {
  books$: Observable<Maybe<Books> | undefined>;

  /**
   * Books List Component constructor
   *
   * @param store - The NgRx store
  * @returns The books list component instance
   */
  constructor(
    private readonly store: Store<AppState>,
  ) {}

  /**
   * OnInit lifecycle method implementation
   * Sets the books observable abd fetches the books, updating the store
   */
   ngOnInit(): void {
    this.books$ = this.store.select(selectBooks);
  }
}
