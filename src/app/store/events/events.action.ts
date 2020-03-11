import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';

export const CREATE_EVENT = createAction('CREATE_EVENT', props<{newEvent: CalendarEvent}>());
