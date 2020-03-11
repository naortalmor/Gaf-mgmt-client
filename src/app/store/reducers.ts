import { modesReducer } from './modes/modes.reducer';
import { eventsReducer } from './events/events.reducer';

export const reducers = {
  mode: modesReducer,
  event: eventsReducer
}
