import { Restaurant } from './../models/restaurant';

export interface AppState {
  mode: string;
  resturants: Restaurant[];
}
