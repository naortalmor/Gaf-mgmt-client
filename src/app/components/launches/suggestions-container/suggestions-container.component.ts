import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FilterSuggestions } from './../../../models/interfaces/suggestion-filter';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

@Component({
  selector: 'app-suggestions-container',
  templateUrl: './suggestions-container.component.html',
  styleUrls: ['./suggestions-container.component.css']
})
export class SuggestionsContainerComponent {
  @Input() restaurants: Restaurant[];
  @Input() filter: FilterSuggestions;
  @Output() addRestaurant = new EventEmitter<Restaurant>();
  @Output() filterChangedEmitter: EventEmitter<FilterSuggestions>;

  constructor() {
    this.filterChangedEmitter = new EventEmitter<FilterSuggestions>();
  }

  onAddRestaurant($event: Restaurant){
    this.addRestaurant.emit($event);
  }

  onFilterChanged(filter: FilterSuggestions): void {
    this.filterChangedEmitter.emit(filter);
  }
}
