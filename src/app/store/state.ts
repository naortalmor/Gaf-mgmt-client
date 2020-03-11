import { FilterSuggestions } from './../models/interfaces/suggestion-filter';
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
  evenings: Evening[];
  restaurantSurvey: RestaurantSurvey[];
  users: User[];
  thisWeekPersons: Person[];
  suggestionsFilter: FilterSuggestions;
  currentUser:User;
  allUsers:User[];
}
