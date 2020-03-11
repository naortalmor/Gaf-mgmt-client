import { INIT_RESTAURANTS, ADD_RESTAURANT } from './restaurant.actions';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

const restaurantInitState = [];

export const restaurantsReducer = createReducer(restaurantInitState,
  on(INIT_RESTAURANTS, (state, {restaurants}) => restaurants),
  on(ADD_RESTAURANT, (state, {restaurant}) => [...state, restaurant]));
