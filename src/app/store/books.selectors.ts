// NgRx
import { createSelector } from '@ngrx/store';

// App
import { AppState, BooksState } from './books.types';


/**
 * Book store selector.
 *
 * @returns The book store from the app state
 */
export const selectBookStore = (state: AppState) => state.bookStore;

export const selectBooks = createSelector(
  selectBookStore,
  /**
   * Select the books from the books state
   *
   * @param state - The current books state slice
   * @returns The books from the state
   */
  (state: BooksState) => state.books,
);
