import { createReducer, on } from '@ngrx/store';
import { INIT_RESTAURANTS_SURVEY } from './restaurant-survey.actions';

const restaurantSurveyInitState = [];

export const restaurantSurveyReducer = createReducer(restaurantSurveyInitState,
  on(INIT_RESTAURANTS_SURVEY, (state, {restaurantSurvey}) => restaurantSurvey));
