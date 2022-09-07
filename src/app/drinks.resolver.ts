import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { DrinksService } from './drinks.service';

@Injectable({
  providedIn: 'root'
})
export class DrinksResolver implements Resolve<boolean> {
  constructor(private drinks: DrinksService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.drinks.fetch()
  }
}
