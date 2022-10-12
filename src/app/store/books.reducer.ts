// NgRx
import { createReducer, on } from '@ngrx/store';

// App
import  { BooksState } from './books.types';
import { setBooks } from './books.actions';


/**
 * Initial book state
 */
const initialBooksState: BooksState = {
  books: [],
};

/**
 * The books state reducers
 */
export const booksReducer = createReducer(
  initialBooksState,
  on(
    setBooks,
    /**
     * Set books reducer function
     *
     * @param state - The current, unmutable books state
     * @param payload - The action payload
     * @param payload.books - The books to set
     * @returns The updated state copy
     */
    (state, { books }) => ({
      ...state,
      books,
    }),
  ),
);
