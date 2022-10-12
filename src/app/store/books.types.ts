// App
import { Books } from '../graphql.service';

/**
 * Books state
 */
export interface BooksState {
  /**
   * Collection of books
   */
  books: Books;
}

/**
 * The applications root state
 */
export interface AppState {
  /**
   * The bookStore state "slice"
   */
  bookStore: BooksState;
}
