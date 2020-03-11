import { CalendarEvent } from 'angular-calendar';
import { Restaurant } from './../models/interfaces/restaurant';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { User } from '../models/interfaces/user';

export interface AppState {
  mode: string;
  events: CalendarEvent[];
  restaurants: Restaurant[];
  restaurantSurvey:RestaurantSurvey[];
  users:User[];
}
