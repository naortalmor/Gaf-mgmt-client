import {Action, createReducer, on} from '@ngrx/store';
import {INIT_EVENINGS} from './evening.actions';

const eveningInitState = [];

export const eveningsReducer = createReducer(eveningInitState,
  on(INIT_EVENINGS, (state, {evenings}) => evenings));

export function reducer(state: any, action: Action) {
  return eveningsReducer(state, action);
}
