import { INIT_RESTAURANTS } from './../store/restaurant/restaurant.actions';
import { Restaurant } from './../models/restaurant';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';

@Injectable({ providedIn: 'root' })
export class RestaurantsService {

  constructor(private store: Store<AppState>) {
    this.initRestaurants();
  }

  initRestaurants() {
    const restaurants: Restaurant[] = [
      {name: 'naor1', address: '1'},
      {name: 'naor2', address: '2'},
      {name: 'naor3', address: '3'},
      {name: 'naor4', address: '4'},
      {name: 'naor5', address: '5'}
    ];

    this.store.dispatch(INIT_RESTAURANTS({restaurants}));
  }
}
