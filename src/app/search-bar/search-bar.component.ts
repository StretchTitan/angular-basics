import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm = '';

  @Output() searchTermEvent = new EventEmitter<string>();

  @Input() testInput: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;

    this.searchTermEvent.emit(searchTerm);
  }
}
