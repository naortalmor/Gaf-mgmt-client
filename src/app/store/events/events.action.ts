import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';

export const INIT_EVENTS = createAction('INIT_EVENTS', props<{ events:CalendarEvent[] }>());
export const CREATE_EVENT = createAction('CREATE_EVENT', props<{ newEvent:CalendarEvent }>());
export const DELETE_EVENT = createAction('DELETE_EVENT', props<{ deleteEvent:CalendarEvent }>());
