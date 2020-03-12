import { createAction, props } from '@ngrx/store';
import { Evening } from 'src/app/models/evening';

export const INIT_EVENINGS = createAction('INIT_EVENINGS', props<{evenings: Evening[]}>());
