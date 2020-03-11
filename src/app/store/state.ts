import { Restaurant } from '../models/interfaces/restaurant';

export interface AppState {
  mode: string;
  resturants: Restaurant[];
}
