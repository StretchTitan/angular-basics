import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DrinksInterceptor } from './drinks.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HighlightDirective } from './highlight.directive';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinkSelectComponent } from './drink-select/drink-select.component';
import { BooksComponent } from './books/books.component';
import { GraphQLModule } from './graphql.module';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DrinksComponent,
    HighlightDirective,
    SearchBarComponent,
    DrinkSelectComponent,
    BooksComponent
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
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DrinksInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
