import { createReducer, on } from '@ngrx/store';
import { TOGGLE_RESTAURANT_STATUS } from './restaurant-survey-opened.actions';

const restaurantSurveyStatusInitState = false;

export const restaurantSurveyStatusReducer = createReducer(restaurantSurveyStatusInitState,
  on(TOGGLE_RESTAURANT_STATUS, (state, {}) => !state));
