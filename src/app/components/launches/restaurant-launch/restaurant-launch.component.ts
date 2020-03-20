import { Restaurant } from '../../../models/interfaces/restaurant';
import { FilterSuggestions } from '../../../models/interfaces/suggestion-filter';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantLaunchTabs } from '../../../models/enums/enums';
import { User } from '../../../models/user';
import { RestaurantSurvey } from '../../../models/interfaces/restaurant-survey';

@Component({
  selector: 'app-restaurant-launch',
  templateUrl: './restaurant-launch.component.html',
  styleUrls: ['./restaurant-launch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantLaunchComponent {
  @Input() connectedUser:User;
  @Input() restaurants:Restaurant[];
  @Input() suggestionsFilter:FilterSuggestions;
  @Input() surveyOpened:boolean;
  @Input() restaurantSurvey:RestaurantSurvey;
  @Input() users:User[];
  @Output() addRestaurantEmitter:EventEmitter<Restaurant>;
  @Output() filterChangedEmitter:EventEmitter<FilterSuggestions>;
  @Output() surveyOpenedEmitter:EventEmitter<void>;
  @Output() surveySubmittedEmitter:EventEmitter<{ restaurants:Restaurant[], connectedUser:User }>;

  tabs = RestaurantLaunchTabs;

  constructor() {
    this.addRestaurantEmitter = new EventEmitter<Restaurant>();
    this.filterChangedEmitter = new EventEmitter<FilterSuggestions>();
    this.surveyOpenedEmitter = new EventEmitter<void>();
    this.surveySubmittedEmitter = new EventEmitter<{ restaurants:Restaurant[], connectedUser:User }>();
    this.tabs = RestaurantLaunchTabs;
  }

  onAddRestaurant(restaurant:Restaurant) {
    this.addRestaurantEmitter.emit(restaurant);
  }

  onFilterChanged(filter:FilterSuggestions):void {
    this.filterChangedEmitter.emit(filter);
  }

  onOpenSurvey():void {
    this.surveyOpenedEmitter.emit();
  }

  onSurveySubmitted(restaurants:Restaurant[]) {
    this.surveySubmittedEmitter.emit({restaurants, connectedUser: this.connectedUser});
  }
}
