import { modesReducer } from './modes/modes.reducer';
import { eventsReducer } from './events/events.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';
import { restaurantSurveyReducer } from './restaurant-survey/restaurant-survey.reducer';
import { usersReducer } from './users/users.reducer';
import { thisWeekPersonsReducer } from './this-week-persons/this-week-persons.reducer';

export const reducers = {
  mode: modesReducer,
  events: eventsReducer,
  restaurants: restaurantsReducer,
  restaurantSurvey: restaurantSurveyReducer,
  users: usersReducer,
  thisWeekPersons: thisWeekPersonsReducer
};
