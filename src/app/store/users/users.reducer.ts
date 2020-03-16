import {Action, createReducer, on} from '@ngrx/store';
import { INIT_ALL_USERS, INIT_CURRENT_USER, INIT_USERS } from './user.actions';
import {thisWeekPersonsReducer} from '../this-week-persons/this-week-persons.reducer';

const usersInitState = [];
const currentUserInitState = undefined;
const allUsersInitState = [];

export const usersReducerr = createReducer(usersInitState,
  on(INIT_USERS, (state, {users}) => users));

export const currentUserReducerr = createReducer(currentUserInitState,
  on(INIT_CURRENT_USER, (state, {currentUser}) => currentUser));

export const allUsersReducerr = createReducer(allUsersInitState,
  on(INIT_ALL_USERS, (state, {allUsers}) => allUsers));


export function usersReducer(state: any, action: Action) {
  return usersReducerr(state, action);
}

export function currentUserReducer(state: any, action: Action) {
  return currentUserReducerr(state, action);
}

export function allUsersReducer(state: any, action: Action) {
  return allUsersReducerr(state, action);
}
