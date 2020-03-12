import { createReducer, on } from '@ngrx/store';
import { INIT_ALL_USERS, INIT_CURRENT_USER, INIT_USERS } from './user.actions';

const usersInitState = [];
const currentUserInitState = undefined;
const allUsersInitState = [];

export const usersReducer = createReducer(usersInitState,
  on(INIT_USERS, (state, {users}) => users));

export const currentUserReducer = createReducer(currentUserInitState,
  on(INIT_CURRENT_USER, (state, {currentUser}) => currentUser));

export const allUsersReducer = createReducer(allUsersInitState,
  on(INIT_ALL_USERS, (state, {allUsers}) => allUsers));
