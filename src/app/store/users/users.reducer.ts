import { Action, createReducer, on } from '@ngrx/store';
import { INIT_CURRENT_USER, INIT_USERS } from './user.actions';

const usersInitState = [];
const currentUserInitState = undefined;

export const users = createReducer(usersInitState,
  on(INIT_USERS, (state, {users}) => users));

export const currentUser = createReducer(currentUserInitState,
  on(INIT_CURRENT_USER, (state, {currentUser}) => currentUser));

export function usersReducer(state:any, action:Action) {
  return users(state, action);
}

export function currentUserReducer(state:any, action:Action) {
  return currentUser(state, action);
}
