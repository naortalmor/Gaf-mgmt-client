import { CalendarEvent } from 'angular-calendar';
import { Restaurant } from './../models/restaurant';

export interface AppState {
  mode: string;
  events: CalendarEvent[];
  resturants: Restaurant[];
}
