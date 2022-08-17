import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks$: Observable<any>;

  constructor(private drinks: DrinksService) { }

  ngOnInit(): void {
    this.drinks$ = this.drinks.fetch();
  }

}
