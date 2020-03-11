import { createReducer, on } from '@ngrx/store';
import { INIT_USERS } from './user.actions';

const usersInitState = [];

export const usersReducer = createReducer(usersInitState,
  on(INIT_USERS, (state, {users}) => users));
