import { FilterSuggestions } from '../../models/interfaces/suggestion-filter';
import { LaunchLocation } from '../../models/enums/enums';
import { Restaurant } from '../../models/interfaces/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { AppState } from '../../store/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { CHANGE_FILTER } from '../../store/suggestions-filter/suggestions-filter.actions';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';

const RESTAURANT_LOCATION_BUTTON:string = 'מסעדות';
const DINING_ROOM_LOCATION_BUTTON:string = 'חדר אוכל';
const CHANGE_SELECTION_BUTTON:string = 'חזור ושנה הבחירה';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesComponent {
  launchLocation:LaunchLocation;
  launchLocations:typeof LaunchLocation;
  restaurantLocationButton:string;
  diningRoomLocationButton:string;
  changeSelectionButton:string;
  connectedUser$:Observable<User>;
  restaurants$:Observable<Restaurant[]>;
  suggestionsFilter$:Observable<FilterSuggestions>;
  surveyOpened$:Observable<boolean>;
  restaurantSurvey$:Observable<RestaurantSurvey>;
  users$:Observable<User[]>;

  constructor(private store:Store<AppState>,
              private usersService:UsersService,
              private restaurantsService:RestaurantsService) {
    this.restaurantsService.initRestaurants();
    this.restaurantsService.initRestaurantSurvey();
    this.restaurantsService.initRestaurantSurveyStatus();
    this.launchLocations = LaunchLocation;
    this.launchLocation = this.launchLocations.notSelected;
    this.restaurantLocationButton = RESTAURANT_LOCATION_BUTTON;
    this.diningRoomLocationButton = DINING_ROOM_LOCATION_BUTTON;
    this.changeSelectionButton = CHANGE_SELECTION_BUTTON;
    this.users$ = this.usersService.getAllUsers();
    this.connectedUser$ = this.usersService.getCurrentUser();
    this.restaurants$ = this.store.select('restaurants');
    this.suggestionsFilter$ = this.store.select('suggestionsFilter');
    this.surveyOpened$ = this.store.select('restaurantSurveyStatus');
    this.restaurantSurvey$ = this.store.select('restaurantSurvey');
  }

  chooseLocation(location:LaunchLocation):void {
    this.launchLocation = location;
  }

  addRestaurant(restaurant:Restaurant):void {
    this.restaurantsService.saveNewRestaurant(restaurant);
  }

  onFilterChanged(filter:FilterSuggestions):void {
    this.store.dispatch(CHANGE_FILTER({filter}));
  }

  onOpenSurvey():void {
    this.restaurantsService.updateRestaurantSurveyStatus(true);
  }

  onSurveySubmitted(event:{ restaurants:Restaurant[], connectedUser:User }) {
    if (event.restaurants && event.restaurants.length) {
      this.restaurantsService.updateRestaurantSurvey(event.restaurants.map(res => res.id), event.connectedUser.uid);
    }
  }
}
