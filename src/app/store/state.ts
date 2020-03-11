import { Restaurant } from '../models/interfaces/restaurant';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { User } from '../models/interfaces/user';

export interface AppState {
  mode: string;
  restaurants: Restaurant[];
  restaurantSurvey:RestaurantSurvey[];
  users:User[];
}
