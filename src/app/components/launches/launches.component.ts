import { FilterSuggestions } from '../../models/interfaces/suggestion-filter';
import { LaunchLocation, Tabs } from '../../models/enums/enums';
import { Restaurant } from '../../models/interfaces/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { AppState } from '../../store/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

const RESTAURANT_LOCATION_BUTTON:string = 'מסעדות';
const DINING_ROOM_LOCATION_BUTTON:string = 'חדר אוכל';
const CHANGE_SELECTION_BUTTON:string = 'שנה בחירה';

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


  /*  users$:Observable<User[]>;
    restaurants$:Observable<Restaurant[]>;
    restaurantSurvey$:Observable<RestaurantSurvey[]>;
    suggestionsFilter$:Observable<FilterSuggestions>;
    surveyOpened$:Observable<boolean>;
    diningRoomOfToday$:Observable<string>;
    selectedTab:string;
    tabs = Tabs;
    connectedUser:User;*/

  constructor(private store:Store<AppState>,
              private usersService:UsersService,
              private restaurantsService:RestaurantsService) {
    this.launchLocations = LaunchLocation;
    this.launchLocation = this.launchLocations.notSelected;
    this.restaurantLocationButton = RESTAURANT_LOCATION_BUTTON;
    this.diningRoomLocationButton = DINING_ROOM_LOCATION_BUTTON;
    this.changeSelectionButton = CHANGE_SELECTION_BUTTON;

    /* this.restaurantsService.initRestaurants();
     this.restaurantsService.initRestaurantSurvey();
     this.restaurantsService.initRestaurantSurveyStatus();
     this.selectedTab = Tabs.OTHER;
     this.users$ = this.store.select('users');
     this.connectedUser = undefined;
     this.usersService.getCurrentUser().subscribe(user => this.connectedUser = user);
     this.restaurants$ = this.store.select('restaurants');
     this.restaurantSurvey$ = this.store.select('restaurantSurvey');
     this.suggestionsFilter$ = this.store.select('suggestionsFilter');
     this.surveyOpened$ = this.store.select('restaurantSurveyStatus');
     this.diningRoomOfToday$ = this.store.select('diningRoomOfToday');*/
  }

  chooseLocation(location:LaunchLocation):void {
    this.launchLocation = location;
    console.log(this.launchLocation);
  }

}
