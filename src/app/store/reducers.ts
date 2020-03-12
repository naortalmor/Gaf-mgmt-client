import { suggestionFilterReducer } from './suggestions-filter/suggestions-filter.reducer';
import { modesReducer } from './modes/modes.reducer';
import { eventsReducer } from './events/events.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';
import { eveningsReducer } from './evening/evening.reducer';
import { restaurantSurveyReducer } from './restaurant-survey/restaurant-survey.reducer';
import { allUsersReducer, currentUserReducer, usersReducer } from './users/users.reducer';
import { thisWeekPersonsReducer } from './this-week-persons/this-week-persons.reducer';
import { restaurantSurveyStatusReducer } from './restaurant-survey-opened/restaurant-survey-opened.reducer';

export const reducers = {
  mode: modesReducer,
  events: eventsReducer,
  restaurants: restaurantsReducer,
  restaurantSurvey: restaurantSurveyReducer,
  restaurantSurveyStatus: restaurantSurveyStatusReducer,
  users: usersReducer,
  thisWeekPersons: thisWeekPersonsReducer,
  evenings: eveningsReducer,
  suggestionsFilter: suggestionFilterReducer,
  currentUser: currentUserReducer,
  allUsers: allUsersReducer
};
