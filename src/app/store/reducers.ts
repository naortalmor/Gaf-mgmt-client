import { modesReducer } from './modes/modes.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';
import { eveningsReducer } from './evening/evening.reducer';

export const reducers = {
  mode: modesReducer,
  resturants: restaurantsReducer,
  evenings: eveningsReducer
}
