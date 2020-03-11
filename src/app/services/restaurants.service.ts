import { INIT_RESTAURANTS } from './../store/restaurant/restaurant.actions';
import { Restaurant } from '../models/interfaces/restaurant';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { INIT_RESTAURANTS_SURVEY } from '../store/restaurant-survey/restaurant-survey.actions';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { RestaurantTypes } from '../models/enums/enums';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  constructor(private store:Store<AppState>) {
  }

  initRestaurants():void {
    const restaurants:Restaurant[] = [
      {id: 1, name: 'מסעדה-1', address: '1', type: RestaurantTypes.ASIAN, rank: 1, isHvr: true, isKosher: true},
      {id: 2, name: 'מסעדה-2', address: '2', type: RestaurantTypes.ASIAN, rank: 2, isHvr: true, isKosher: true},
      {id: 3, name: 'מסעדה-3', address: '3', type: RestaurantTypes.ASIAN, rank: 3, isHvr: true, isKosher: true},
      {id: 4, name: 'מסעדה-4', address: '4', type: RestaurantTypes.ASIAN, rank: 4, isHvr: true, isKosher: true},
      {id: 5, name: 'מסעדה-5', address: '5', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true}
    ];

    this.store.dispatch(INIT_RESTAURANTS({restaurants}));
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
}
