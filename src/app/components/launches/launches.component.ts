import { CHANGE_FILTER } from './../../store/suggestions-filter/suggestions-filter.actions';
import { FilterSuggestions } from './../../models/interfaces/suggestion-filter';
import { Tabs } from './../../models/enums/enums';
import { Restaurant } from '../../models/interfaces/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { AppState } from './../../store/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { User } from '../../models/interfaces/user';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent {
  users$:Observable<User[]>;
  restaurants$:Observable<Restaurant[]>;
  restaurantSurvey$:Observable<RestaurantSurvey[]>;
  suggestionsFilter$:Observable<FilterSuggestions>;
  surveyOpened$:Observable<boolean>;
  selectedTab:string;
  tabs = Tabs;
  userRestaurantSelection:Restaurant;

  constructor(private store:Store<AppState>,
              private restaurantsService:RestaurantsService) {
    this.restaurantsService.initRestaurants();
    this.restaurantsService.initRestaurantSurvey();
    this.selectedTab = Tabs.OTHER;
    this.users$ = this.store.select('users');
    this.restaurants$ = this.store.select('restaurants');
    this.restaurantSurvey$ = this.store.select('restaurantSurvey');
    this.suggestionsFilter$ = this.store.select('suggestionsFilter');
    this.surveyOpened$ = this.store.select('restaurantSurveyStatus');
  }

  changeTab(newTab:string):void {
    this.selectedTab = newTab;
  }

  onAddRestaurant(restaurant:Restaurant) {
    this.restaurantsService.saveNewRestaurant(restaurant);
  }

  selectRestaurant(selectedRestaurant:Restaurant):void {
    this.userRestaurantSelection = selectedRestaurant;
  }

  onOpenSurvey():void {
    this.restaurantsService.updateRestaurantSurveyStatus(true);
  }

  onSurveySubmitted(restaurant:Restaurant) {
    console.log(restaurant);
    this.onSurveyClosed();
  }

  onSurveyClosed():void {
    this.restaurantsService.updateRestaurantSurveyStatus(false);
  }

  onFilterChanged(filter:FilterSuggestions):void {
    this.store.dispatch(CHANGE_FILTER({filter}));
  }
}
