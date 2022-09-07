import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit, OnDestroy {
  drinks: any;
  destroy$ = new Subject();
  banana: Subscription;
  showDrinks = true;
  hello = "goodbye"
  initDrinks: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private drinksService: DrinksService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.drinks = data.drinks;
      this.initDrinks = data.drinks;
    })

    this.banana = this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((event: Event): event is RouterEvent => event instanceof NavigationStart),
    ).subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  filterDrinks(searchTerm: string) {
    this.drinks = this.initDrinks.filter((drink: any) => {
      return drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  fetchAlcohol(formVals: any) {
    this.drinksService.fetchAlcohol(formVals.alcohol).subscribe(((drinks: any) => {
      this.drinks = drinks;
      this.initDrinks = drinks;
    }));
  }
}
