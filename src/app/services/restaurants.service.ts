import { RestaurantTypes } from './../models/enums/enums';
import { INIT_RESTAURANTS } from './../store/restaurant/restaurant.actions';
import { Restaurant } from '../models/interfaces/restaurant';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  constructor(private store:Store<AppState>) {
  }

  initRestaurants() {
    const restaurants:Restaurant[] = [
      {id: 1, name: 'naor1', address: '1', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true},
      {id: 2, name: 'naor2', address: '2', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true},
      {id: 3, name: 'naor3', address: '3', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true},
      {id: 4, name: 'naor4', address: '4', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true},
      {id: 5, name: 'naor5', address: '5', type: RestaurantTypes.ASIAN, rank: 5, isHvr: true, isKosher: true}
    ];

    this.store.dispatch(INIT_RESTAURANTS({restaurants}));
  }
}
