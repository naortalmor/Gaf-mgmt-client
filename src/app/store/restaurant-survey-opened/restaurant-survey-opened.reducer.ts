import {Action, createReducer, on} from '@ngrx/store';
import {UPDATE_RESTAURANT_STATUS} from './restaurant-survey-opened.actions';

const restaurantSurveyStatusInitState = false;

export const restaurantSurveyStatusReducer = createReducer(restaurantSurveyStatusInitState,
  on(UPDATE_RESTAURANT_STATUS, (state, {restaurantSurveyStatus}) => restaurantSurveyStatus));

export function reducer(state: any, action: Action) {
  return restaurantSurveyStatusReducer(state, action);
}
