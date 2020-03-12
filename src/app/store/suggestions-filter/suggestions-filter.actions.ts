import { FilterSuggestions } from '../../models/interfaces/suggestion-filter';
import { createAction, props } from '@ngrx/store';

export const CHANGE_FILTER = createAction('CHANGE_FILTER', props<{ filter:FilterSuggestions }>());
