import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { User } from '../models/interfaces/user';
import { INIT_USERS, INIT_ALL_USERS, INIT_CURRENT_USER } from '../store/users/user.actions';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private store:Store<AppState>,
              private http:HttpClient) {
  }

  initUsers():void {
    this.http.get('http://localhost:1111/mifgafim/getAllUsers')
    .subscribe((allUsers:User[]) => this.store.dispatch(INIT_USERS({users: allUsers})));
    let user:User = {
      id:1,
      name:'Ran',
      teamId:1,
      typeId:1
    };
    this.store.dispatch(INIT_CURRENT_USER({currentUser: user}));
  }

  getAllUsers() {
    return this.store.select('users');
  }

  getCurrentUser() {
    return this.store.select('currentUser');
  }
}
