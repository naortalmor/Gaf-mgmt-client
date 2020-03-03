import { SELECT_MODE } from './modes.actions';
import { createReducer, on } from '@ngrx/store';

const modesInitialState = undefined;

export const modesReducer = createReducer(modesInitialState,
  on(SELECT_MODE, (state, {newMode}) => newMode));
