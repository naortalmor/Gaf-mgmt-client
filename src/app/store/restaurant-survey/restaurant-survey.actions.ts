import { createAction, props } from '@ngrx/store';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';

export const INIT_RESTAURANTS_SURVEY = createAction('INIT_RESTAURANTS_SURVEY', props<{ restaurantSurvey:RestaurantSurvey[] }>());
export const UPDATE_RESTAURANTS_SURVEY = createAction('UPDATE_RESTAURANTS_SURVEY', props<{ restaurantSurvey:RestaurantSurvey }>());
