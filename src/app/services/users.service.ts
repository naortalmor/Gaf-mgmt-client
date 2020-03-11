import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { User } from '../models/interfaces/user';
import { INIT_USERS } from '../store/users/user.actions';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private store:Store<AppState>) {
  }

  initUsers():void {
    const users:User[] = [
      {
        id: 1,
        name: 'Saeed',
        teamId: 1,
        typeId: 1
      },
      {
        id: 2,
        name: 'Naor',
        teamId: 1,
        typeId: 1
      },
      {
        id: 3,
        name: 'Lior',
        teamId: 1,
        typeId: 1
      },
      {
        id: 4,
        name: 'Tameer',
        teamId: 1,
        typeId: 1
      },
      {
        id: 5,
        name: 'Aya',
        teamId: 1,
        typeId: 1
      },
    ];
    this.store.dispatch(INIT_USERS({users}));
  }
}
