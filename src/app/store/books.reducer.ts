import { createReducer, on } from "@ngrx/store";
import { setBooks } from "./books.actions";



export interface BooksState {
    books: any;
}

export interface AppState {
    bookStore: BooksState;
}

const initialBooksState = {
    books: [],
}


export const booksReducer = createReducer(
    initialBooksState,
    on(setBooks, (state, { books }) => ({
        ...state,
        books
    }))
)