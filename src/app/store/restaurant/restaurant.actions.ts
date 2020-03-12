import { createAction, props } from '@ngrx/store';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

export const INIT_RESTAURANTS = createAction('INIT_RESTAURANTS', props<{ restaurants:Restaurant[] }>());

export const ADD_RESTAURANT = createAction('ADD_RESTAURANT', props<{ restaurant:Restaurant }>());

