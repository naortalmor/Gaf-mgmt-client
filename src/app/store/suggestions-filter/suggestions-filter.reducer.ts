import { CHANGE_FILTER } from './suggestions-filter.actions';
import { createReducer, on } from '@ngrx/store';

const suggestionFilterInitState = {};

export const suggestionFilterReducer = createReducer(suggestionFilterInitState,
    on(CHANGE_FILTER, (state, {filter}) => filter));
