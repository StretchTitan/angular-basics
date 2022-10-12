// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Bookstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// GraphQL
import { GraphQLModule } from './graphql.module';

// App
import { AppRoutingModule } from './app-routing.module';
import { DrinksInterceptor } from './drinks.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HighlightDirective } from './highlight.directive';
import { booksReducer } from './store/books.reducer';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './bookslist/bookslist.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinkSelectComponent } from './drink-select/drink-select.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DrinksComponent,
    HighlightDirective,
    SearchBarComponent,
    DrinkSelectComponent,
    BooksComponent,
    BooksListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    StoreModule.forRoot({ bookStore: booksReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DrinksInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
