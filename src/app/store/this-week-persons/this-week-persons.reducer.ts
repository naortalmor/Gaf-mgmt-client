import {INIT_THIS_WEEK_PERSONS} from './this-week-persons.actions';
import {Action, createReducer, on} from '@ngrx/store';

const thisWeekPersonsInitState = [];

export const thisWeekPersonsReducer = createReducer(thisWeekPersonsInitState,
  on(INIT_THIS_WEEK_PERSONS, (state, {thisWeekPersons}) => thisWeekPersons));

export function reducer(state: any, action: Action) {
  return thisWeekPersonsReducer(state, action);
}
