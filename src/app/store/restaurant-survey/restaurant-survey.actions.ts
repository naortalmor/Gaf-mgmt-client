import { createAction, props } from '@ngrx/store';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';

export const INIT_RESTAURANTS_SURVEY = createAction('INIT_RESTAURANTS_SURVEY', props<{ restaurantSurvey:RestaurantSurvey[] }>());
