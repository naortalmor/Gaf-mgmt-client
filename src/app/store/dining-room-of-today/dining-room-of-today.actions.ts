import { createAction, props } from '@ngrx/store';

export const INIT_DINING_OF_TODAY = createAction('INIT_DINING_OF_TODAY', props<{ diningRoomOfToday:string }>());
