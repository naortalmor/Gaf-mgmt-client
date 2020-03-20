import { INIT_DINING_OF_TODAY } from './../store/dining-room-of-today/dining-room-of-today.actions';
import { ADD_RESTAURANT } from 'src/app/store/restaurant/restaurant.actions';
import { config } from '../consts/config';
import { HttpClient } from '@angular/common/http';
import { INIT_RESTAURANTS } from '../store/restaurant/restaurant.actions';
import { Restaurant } from '../models/interfaces/restaurant';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import {
  INIT_RESTAURANTS_SURVEY,
  UPDATE_RESTAURANTS_SURVEY
} from '../store/restaurant-survey/restaurant-survey.actions';
import { RestaurantSurvey } from '../models/interfaces/restaurant-survey';
import { UPDATE_RESTAURANT_STATUS } from '../store/restaurant-survey-opened/restaurant-survey-opened.actions';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  constructor(private store:Store<AppState>,
              private http:HttpClient) {
  }

  initRestaurants():void {
    this.http.get(`${config.serverUrl}/launches/getRestaurants`)
      .subscribe((restaurants:Restaurant[]) => this.store.dispatch(INIT_RESTAURANTS({restaurants})));
  }

  saveNewRestaurant(newRestaurant:Restaurant):void {
    this.http.post(`${config.serverUrl}/launches/addRestaurants`, newRestaurant).subscribe((restaurant:Restaurant) => {
      this.store.dispatch(ADD_RESTAURANT({restaurant}));
    });
  }

  initRestaurantSurvey():void {
    this.http.get(`${config.serverUrl}/launches/getRestaurantSurvey`).subscribe((restaurantSurvey:RestaurantSurvey) => {
      this.store.dispatch(INIT_RESTAURANTS_SURVEY({restaurantSurvey}));
    });
  }

  getDiningRoomOfToday():void {
    this.http.get(`${config.serverUrl}/launches/getDiningRoomOfToday`).subscribe((diningRoomOfToday:string) => {
      if (diningRoomOfToday) {
        this.store.dispatch(INIT_DINING_OF_TODAY({diningRoomOfToday}));
      }
    });
  }

  updateRestaurantSurvey(restaurantsIds:number[], voterId:string):void {
    this.http.post(`${config.serverUrl}/launches/updateRestaurantSurvey`, {
      ids: restaurantsIds,
      voterId: voterId
    }).subscribe((restaurantSurvey:{ [id:string]:string[] }) => {
       this.store.dispatch(UPDATE_RESTAURANTS_SURVEY({restaurantSurvey}));
    });
  }

  initRestaurantSurveyStatus():void {
    this.http.get(`${config.serverUrl}/launches/getRestaurantSurveyStatus`).subscribe((status:boolean) => {
      this.store.dispatch(UPDATE_RESTAURANT_STATUS({restaurantSurveyStatus: status}));
    });
  }

  updateRestaurantSurveyStatus(newStatus:boolean):void {
    this.http.post(`${config.serverUrl}/launches/updateRestaurantSurveyStatus`, {newStatus}).subscribe((status:boolean) => {
      this.store.dispatch(UPDATE_RESTAURANT_STATUS({restaurantSurveyStatus: status}));
    });
  }
}

interface NewVote {
  ids:number[];
  voterId:string;
}
