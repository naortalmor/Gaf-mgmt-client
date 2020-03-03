import { createAction, props } from '@ngrx/store';

export const SELECT_MODE = createAction('SELECT_MODE', props<{newMode: string}>());
