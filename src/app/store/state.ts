import { FilterSuggestions } from '../models/interfaces/suggestion-filter';
import { CalendarEvent } from 'angular-calendar';
import { Restaurant } from '../models/interfaces/restaurant';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { User } from '../models/user';
import { Person } from '../models/interfaces/person';
import { Evening } from '../models/evening';

export interface AppState {
  events:CalendarEvent[];
  restaurants:Restaurant[];
  evenings:Evening[];
  restaurantSurvey:RestaurantSurvey;
  restaurantSurveyStatus:boolean;
  users:User[];
  thisWeekPersons:Person[];
  suggestionsFilter:FilterSuggestions;
  currentUser:User;
  diningRoomOfToday:string;
}
