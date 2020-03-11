import { CalendarEvent } from 'angular-calendar';

export interface AppState {
  mode: string;
  events: CalendarEvent[];
}
