import { ADD_RESTAURANT, INIT_RESTAURANTS } from './restaurant.actions';
import {Action, createReducer, on} from '@ngrx/store';

const restaurantInitState = [];

export const restaurantsReducer = createReducer(restaurantInitState,
  on(INIT_RESTAURANTS, (state, {restaurants}) => restaurants),
  on(ADD_RESTAURANT, (state, {restaurant}) => [...state, restaurant]));

export function reducer(state: any, action: Action) {
  return restaurantsReducer(state, action);
}
