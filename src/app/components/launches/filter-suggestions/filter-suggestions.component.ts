import { FilterSuggestions } from '../../../models/interfaces/suggestion-filter';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-suggestions',
  templateUrl: './filter-suggestions.component.html',
  styleUrls: ['./filter-suggestions.component.css']
})
export class FilterSuggestionsComponent {
  @Output() filterChangedEmitter:EventEmitter<FilterSuggestions>;

  constructor() {
    this.filterChangedEmitter = new EventEmitter<FilterSuggestions>();
  }

  filterForm = new FormGroup({
    name: new FormControl(''),
    minRank: new FormControl('')
  });

  onSubmit() {
    this.filterChangedEmitter.emit(this.filterForm.value);
  }
}
