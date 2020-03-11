import { INIT_THIS_WEEK_PERSONS } from './this-week-persons.actions';
import { createReducer, on } from '@ngrx/store';

const thisWeekPersonsInitState = [];

export const thisWeekPersonsReducer = createReducer(thisWeekPersonsInitState,
  on(INIT_THIS_WEEK_PERSONS, (state, {thisWeekPersons}) => thisWeekPersons));
