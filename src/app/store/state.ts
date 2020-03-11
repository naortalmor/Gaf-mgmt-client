import { CalendarEvent } from 'angular-calendar';
import { Restaurant } from './../models/interfaces/restaurant';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { User } from '../models/interfaces/user';
import { Person } from '../models/interfaces/person';
import { Evening } from './../models/evening';

export interface AppState {
  mode: string;
  events: CalendarEvent[];
  restaurants: Restaurant[];
  restaurantSurvey:RestaurantSurvey[];
  users:User[];
  thisWeekPersons:Person[];
  evenings: Evening[];
}
