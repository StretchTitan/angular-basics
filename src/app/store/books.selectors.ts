import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, BooksState } from "./books.reducer";


export const selectBookStore = (state: AppState) => state.bookStore;

export const selectBooks = createSelector(
    selectBookStore,
    (state: BooksState) => state.books
)