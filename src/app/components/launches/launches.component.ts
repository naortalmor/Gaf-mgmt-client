import { Tabs } from './../../models/enums/enums';
import { Restaurant } from '../../models/interfaces/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { AppState } from './../../store/state';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { User } from '../../models/interfaces/user';
import { thisWeekPersonsReducer } from 'src/app/store/this-week-persons/this-week-persons.reducer';
import { ADD_RESTAURANT } from 'src/app/store/restaurant/restaurant.actions';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent {
  users$: Observable<User[]>;
  restaurants$:Observable<Restaurant[]>;
  restaurantSurvey$:Observable<RestaurantSurvey[]>;
  selectedTab:string;
  tabs = Tabs;

  constructor(private store:Store<AppState>,
              private restaurantsService:RestaurantsService) {
    this.restaurantsService.initRestaurants();
    this.restaurantsService.initRestaurantSurvey();
    this.selectedTab = Tabs.OTHER;
    this.users$ = this.store.select('users');
    this.restaurants$ = this.store.select('restaurants');
    this.restaurantSurvey$ = this.store.select('restaurantSurvey');
  }

  changeTab(newTab:string):void {
    this.selectedTab = newTab;
  }

  onAddRestaurant(restaurant: Restaurant){
    console.log(restaurant)
    this.store.dispatch(ADD_RESTAURANT({restaurant}))
  }
}
