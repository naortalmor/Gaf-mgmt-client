import { ADD_RESTAURANT } from 'src/app/store/restaurant/restaurant.actions';
import { config } from './../consts/config';
import { HttpClient } from '@angular/common/http';
import { INIT_RESTAURANTS } from './../store/restaurant/restaurant.actions';
import { Restaurant } from '../models/interfaces/restaurant';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { INIT_RESTAURANTS_SURVEY } from '../store/restaurant-survey/restaurant-survey.actions';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { RestaurantTypes } from '../models/enums/enums';
import { TOGGLE_RESTAURANT_STATUS } from '../store/restaurant-survey-opened/restaurant-survey-opened.actions';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  constructor(private store: Store<AppState>,
              private http: HttpClient) {
  }

  initRestaurants():void {
    this.http.get(`${config.serverUrl}/launches/getRestaurants`)
    .subscribe((restaurants:Restaurant[]) => this.store.dispatch(INIT_RESTAURANTS({restaurants})));
  }

  saveNewRestaurant(newRestaurant: Restaurant): void {
    this.http.post(`${config.serverUrl}/launches/addRestaurants`, newRestaurant).subscribe((restaurant: Restaurant) => {
      this.store.dispatch(ADD_RESTAURANT({restaurant}));
    })
  }

  initRestaurantSurvey():void {
    const restaurantSurvey:RestaurantSurvey[] = [
      {
        restaurantId: 1,
        votersIds: [1, 2, 3]
      },
      {
        restaurantId: 2,
        votersIds: [4, 5]
      },
      {
        restaurantId: 3,
        votersIds: [3, 5]
      },
    ];
    this.store.dispatch(INIT_RESTAURANTS_SURVEY({restaurantSurvey}));
  }

  toggleRestaurantSurveyStatus():void {
    this.store.dispatch(TOGGLE_RESTAURANT_STATUS());

  }
}
