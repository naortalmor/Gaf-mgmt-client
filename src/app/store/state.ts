import { Restaurant } from './../models/restaurant';
import { Person } from '../models/interfaces/person';

export interface AppState {
  mode: string;
  resturants: Restaurant[];
  thisWeekPersons:Person[];
}
