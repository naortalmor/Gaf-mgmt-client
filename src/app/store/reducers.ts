import { modesReducer } from './modes/modes.reducer';
import { restaurantsReducer } from './restaurant/restaurant.reducer';
import { restaurantSurveyReducer } from './restaurant-survey/restaurant-survey.reducer';
import { usersReducer } from './users/users.reducer';

export const reducers = {
  mode: modesReducer,
  restaurants: restaurantsReducer,
  restaurantSurvey: restaurantSurveyReducer,
  users: usersReducer
};
