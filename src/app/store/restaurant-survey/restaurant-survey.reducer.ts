import { Action, createReducer, on } from '@ngrx/store';
import { INIT_RESTAURANTS_SURVEY, UPDATE_RESTAURANTS_SURVEY } from './restaurant-survey.actions';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';

const restaurantSurveyInitState:RestaurantSurvey = {};

export const restaurantSurveyReducer = createReducer(restaurantSurveyInitState,
  on(INIT_RESTAURANTS_SURVEY, (state, {restaurantSurvey}) => restaurantSurvey),
  on(UPDATE_RESTAURANTS_SURVEY, (state, {restaurantSurvey}) => {
    let newState:RestaurantSurvey = Object.assign({}, state);
    let surveyKeys:string[] = Object.keys(restaurantSurvey);

    if (surveyKeys && surveyKeys.length) {
      let newVoter:string = restaurantSurvey[surveyKeys[0]] ? restaurantSurvey[surveyKeys[0]][0] : undefined;

      surveyKeys.forEach(key => {
        if (newState[key]) {
          let voters:string[] = newState[key];
          if (newVoter && !voters.find(voter => voter === newVoter)) {
            voters = [...voters, newVoter];
          }

          newState[key] = voters;
        } else {
          newState[key] = [newVoter];
        }
      });
    }

    return newState;
  })
);

export function reducer(state:any, action:Action) {
  return restaurantSurveyReducer(state, action);
}
