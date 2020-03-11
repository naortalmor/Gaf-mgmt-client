import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { User } from '../models/interfaces/user';
import { INIT_USERS } from '../store/users/user.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private store:Store<AppState>,
              private http:HttpClient) {
  }

  initUsers():void {
    this.http.get('http://localhost:1111/mifgafim/getAllUsers')
      .subscribe((allUsers:User[]) => this.store.dispatch(INIT_USERS({users: allUsers})));
  }

  getAllUsers() {
    return this.store.select('users');
  }

  getCurrentUser() {
    return this.store.select('currentUser');
  }
}
