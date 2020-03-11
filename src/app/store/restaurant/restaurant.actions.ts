import { createAction, props } from '@ngrx/store';
import { Restaurant } from 'src/app/models/restaurant';

export const INIT_RESTAURANTS = createAction('INIT_RESTAURANTS', props<{restaurants: Restaurant[]}>());
