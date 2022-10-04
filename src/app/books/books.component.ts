import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AddBookGQL, BooksGQL } from '../graphql.service';
import { setBooks } from '../store/books.actions';
import { AppState } from '../store/books.reducer';
import { selectBooks } from '../store/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<any>;

  title: string;
  author: string;

  constructor(private booksGql: BooksGQL, private addBookGql: AddBookGQL, private store: Store<AppState>) { }

  ngOnInit(): void {    
    this.books$ = this.store.select(selectBooks);
    
    this.booksGql.fetch().subscribe(res => {
      this.store.dispatch(setBooks({ books: res.data.books }))
    });
  }

  addBook() {
    this.addBookGql.mutate({
      title: this.title,
      author: this.author
    }).subscribe();
  }
}
