import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/models/interfaces/person';

export const INIT_THIS_WEEK_PERSONS =
 createAction('INIT_THIS_WEEK_PERSONS', props<{thisWeekPersons: Person[]}>());
