import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private httpClient: HttpClient) { }

  fetch() {
    return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').pipe(
      map((res: any) => res.drinks)
    )
  }
}
