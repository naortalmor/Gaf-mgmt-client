import { FilterSuggestions } from './../../../models/interfaces/suggestion-filter';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

@Component({
  selector: 'app-suggestions-container',
  templateUrl: './suggestions-container.component.html',
  styleUrls: ['./suggestions-container.component.css']
})
export class SuggestionsContainerComponent {
  @Input() restaurants: Restaurant[];
  @Input() filter: FilterSuggestions;
  @Output() filterChangedEmitter: EventEmitter<FilterSuggestions>;

  constructor() {
    this.filterChangedEmitter = new EventEmitter<FilterSuggestions>();
  }

  onFilterChanged(filter: FilterSuggestions): void {
    this.filterChangedEmitter.emit(filter);
  }
}
