import { createReducer, on } from '@ngrx/store';
import { INIT_EVENINGS } from './evening.actions';

const eveningInitState = [];

export const eveningsReducer = createReducer(eveningInitState,
  on(INIT_EVENINGS, (state, {evenings}) => evenings));