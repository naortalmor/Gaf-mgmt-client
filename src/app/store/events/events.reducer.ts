import { createReducer, on } from '@ngrx/store';
import { CREATE_EVENT, DELETE_EVENT, INIT_EVENTS } from './events.action';
import { CalendarEvent } from 'angular-calendar';
import { colors } from 'src/app/models/enums/color';

const eventsInitialState:CalendarEvent[] = [];

export const eventsReducer = createReducer(eventsInitialState,
  on(INIT_EVENTS, (state, {events}) => [...events]),
  on(CREATE_EVENT, (state, {newEvent}) => [...state, newEvent]),
  on(DELETE_EVENT, (state, {deleteEvent}) => state.filter((event) => event !== deleteEvent)));
