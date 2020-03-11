import { Restaurant } from './../models/restaurant';
import { Evening } from './../models/evening';

export interface AppState {
  mode: string;
  resturants: Restaurant[];
  evenings: Evening[];
}
