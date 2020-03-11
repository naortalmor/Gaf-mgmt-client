import { createAction, props } from '@ngrx/store';
import { User } from '../../models/interfaces/user';

export const INIT_USERS = createAction('INIT_USERS', props<{ users:User[] }>());
