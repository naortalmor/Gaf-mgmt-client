import { createAction, props } from '@ngrx/store';

export const UPDATE_RESTAURANT_STATUS = createAction('UPDATE_RESTAURANT_STATUS', props<{ restaurantSurveyStatus:boolean }>());
