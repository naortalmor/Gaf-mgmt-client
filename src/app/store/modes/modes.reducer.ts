import { SELECT_MODE } from './modes.actions';
import {Action, createReducer, on} from '@ngrx/store';

const modesInitialState = undefined;

export const modesReducer = createReducer(modesInitialState,
  on(SELECT_MODE, (state, {newMode}) => newMode));

export function reducer(state: any, action: Action) {
  return modesReducer(state, action);
}
