import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const INIT_USERS = createAction('INIT_USERS', props<{ users:User[] }>());

export const INIT_CURRENT_USER = createAction('INIT_CURRENT_USER', props<{ currentUser:User }>());

export const INIT_ALL_USERS = createAction('INIT_ALL_USERS', props<{ allUsers:User[] }>());
