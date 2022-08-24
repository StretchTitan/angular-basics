import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit, OnDestroy {
  drinks$: Observable<any>;
  destroy$ = new Subject();
  banana: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.drinks$ = this.activatedRoute.data.pipe(map((data: any) => data.drinks))

    this.banana = this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((event: Event): event is RouterEvent => event instanceof NavigationStart),
    ).subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
