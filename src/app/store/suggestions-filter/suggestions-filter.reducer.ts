import {CHANGE_FILTER} from './suggestions-filter.actions';
import {Action, createReducer, on} from '@ngrx/store';

const suggestionFilterInitState = {};

export const suggestionFilterReducer = createReducer(suggestionFilterInitState,
    on(CHANGE_FILTER, (state, {filter}) => filter));

export function reducer(state: any, action: Action) {
  return suggestionFilterReducer(state, action);
}
