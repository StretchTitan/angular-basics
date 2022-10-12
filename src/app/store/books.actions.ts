// NgRx
import { createAction, props } from '@ngrx/store';

// App
import  { BooksState } from './books.types'; // AppState


/**
 * Set Books action.
 * Dispatches the set books action.
 */
export const setBooks = createAction(
  'Set Books',
  props<BooksState>(),
);
