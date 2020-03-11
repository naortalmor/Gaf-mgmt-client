import { modesReducer } from './modes/modes.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';
import { thisWeekPersonsReducer } from './this-week-persons/this-week-persons.reducer';

export const reducers = {
  mode: modesReducer,
  resturants: restaurantsReducer,
  thisWeekPersons: thisWeekPersonsReducer
}
