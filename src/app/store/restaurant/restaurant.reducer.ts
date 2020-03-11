import { INIT_RESTAURANTS } from './restaurant.actions';
import { createReducer, on } from '@ngrx/store';

const restaurantInitState = [];

export const restaurantsReducer = createReducer(restaurantInitState,
  on(INIT_RESTAURANTS, (state, {restaurants}) => restaurants));
