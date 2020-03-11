import { modesReducer } from './modes/modes.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';

export const reducers = {
  mode: modesReducer,
  resturants: restaurantsReducer
};
