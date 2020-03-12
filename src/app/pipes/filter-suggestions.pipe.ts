import { FilterSuggestions } from '../models/interfaces/suggestion-filter';
import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from '../models/interfaces/restaurant';

@Pipe({
  name: 'filterSuggestions'
})
export class FilterSuggestionsPipe implements PipeTransform {
  transform(allSuggestions:Restaurant[], filter:FilterSuggestions):Restaurant[] {
    let result:Restaurant[] = [...allSuggestions];
    if (filter.name && filter.name !== '') {
      result = result.filter((restaurant:Restaurant) => restaurant.name.includes(filter.name));
    }

    if (filter.minRank) {
      result = result.filter((restaurant:Restaurant) => restaurant.rank >= filter.minRank);
    }

    return result;
  }

}
