import { createReducer, on } from '@ngrx/store';
import { INIT_DINING_OF_TODAY } from './dining-room-of-today.actions';

const diningRoomOfTodayInitState = '';

export const diningRoomOfTodayReducer = createReducer(diningRoomOfTodayInitState,
  on(INIT_DINING_OF_TODAY, (state, {diningRoomOfToday}) => diningRoomOfToday),
);
