import {Action, createReducer, on} from '@ngrx/store';
import {INIT_RESTAURANTS_SURVEY, UPDATE_RESTAURANTS_SURVEY} from './restaurant-survey.actions';

const restaurantSurveyInitState = [];

export const restaurantSurveyReducer = createReducer(restaurantSurveyInitState,
  on(INIT_RESTAURANTS_SURVEY, (state, {restaurantSurvey}) => restaurantSurvey),
  on(UPDATE_RESTAURANTS_SURVEY, (state, {restaurantSurvey}) => {
    return state.map(st => {
      if (st.restaurantId === restaurantSurvey.restaurantId) {
        st.votersIds = restaurantSurvey.votersIds;
      }
    });
  })
);

export function reducer(state: any, action: Action) {
  return restaurantSurveyReducer(state, action);
}
