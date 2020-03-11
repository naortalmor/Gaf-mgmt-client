import { modesReducer } from './modes/modes.reducer';
import { eventsReducer } from './events/events.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';

export const reducers = {
  mode: modesReducer,
  events: eventsReducer,
  resturants: restaurantsReducer
}
