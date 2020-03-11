import { Tabs } from './../../models/enums/enums';
import { Restaurant } from '../../models/interfaces/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { AppState } from './../../store/state';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { User } from '../../models/interfaces/user';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent {
  @Input() users:User[];
  restaurants$:Observable<Restaurant[]>;
  restaurantSurvey$:Observable<RestaurantSurvey[]>;
  selectedTab:string;
  tabs = Tabs;

  constructor(private store:Store<AppState>,
              private restaurantsService:RestaurantsService) {
    this.restaurantsService.initRestaurants();
    this.restaurantsService.initRestaurantSurvey();
    this.selectedTab = Tabs.OTHER;
    this.restaurants$ = this.store.select('resturants');
    this.restaurantSurvey$ = this.store.select('restaurantSurvey');
  }

  changeTab(newTab:string):void {
    this.selectedTab = newTab;
  }
}
