import { createReducer, on } from '@ngrx/store';
import { CREATE_EVENT } from './events.action';
import { CalendarEvent } from 'angular-calendar';
import { colors } from 'src/app/models/enums/color';

const eventsInitialState:CalendarEvent[] = [{
  start: new Date(),
  end: new Date(),
  title: 'I cant',
  color: colors.red,
  allDay: true,
}];;

export const eventsReducer = createReducer(eventsInitialState,
  on(CREATE_EVENT, (state, {newEvent}) => [...state,newEvent]));