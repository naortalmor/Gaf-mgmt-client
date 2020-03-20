import * as suggestionsFilter from './suggestions-filter/suggestions-filter.reducer';
import * as eventsReducer from './events/events.reducer';
import * as restaurantsReducer from './restaurant/restaurant.reducer';
import * as eveningsReducer from './evening/evening.reducer';
import * as restaurantSurveyReducer from './restaurant-survey/restaurant-survey.reducer';
import * as users from './users/users.reducer';
import * as thisWeekPersonsReducer from './this-week-persons/this-week-persons.reducer';
import * as restaurantSurveyStatusReducer from './restaurant-survey-opened/restaurant-survey-opened.reducer';
import * as diningRoomOfTodayReducer from './dining-room-of-today/dining-room-of-today.reducer';

export const reducers = {
  events: eventsReducer.reducer,
  restaurants: restaurantsReducer.reducer,
  restaurantSurvey: restaurantSurveyReducer.reducer,
  restaurantSurveyStatus: restaurantSurveyStatusReducer.reducer,
  users: users.usersReducer,
  thisWeekPersons: thisWeekPersonsReducer.reducer,
  evenings: eveningsReducer.reducer,
  suggestionsFilter: suggestionsFilter.reducer,
  currentUser: users.currentUserReducer,
  diningRoomOfToday: diningRoomOfTodayReducer.reducer
};
