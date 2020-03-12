import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { User } from '../models/user';
import { INIT_CURRENT_USER, INIT_USERS } from '../store/users/user.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private store:Store<AppState>,
              private http:HttpClient) {
  }

  // initUsers():void {
  //   /*  this.http.get('http://localhost:1111/mifgafim/getAllUsers')
  //     .subscribe((allUsers:User[]) => this.store.dispatch(INIT_USERS({users: allUsers})));
  // */
  //   let user:User = {
  //     id: 1,
  //     name: 'Ran',
  //     teamId: 1,
  //     typeId: 1
  //   };
  //   let users:User[] = [
  //     {
  //       id: 1,
  //       name: 'סעיד',
  //       teamId: 1,
  //       typeId: 1
  //     },
  //     {
  //       id: 2,
  //       name: 'נאור',
  //       teamId: 1,
  //       typeId: 1
  //     },
  //     {
  //       id: 3,
  //       name: 'תמיר',
  //       teamId: 1,
  //       typeId: 1
  //     },
  //     {
  //       id: 4,
  //       name: 'ליאור',
  //       teamId: 1,
  //       typeId: 1
  //     },
  //     {
  //       id: 5,
  //       name: 'איה',
  //       teamId: 1,
  //       typeId: 1
  //     },
  //   ];
  //   this.store.dispatch(INIT_CURRENT_USER({currentUser: user}));
  //   this.store.dispatch(INIT_USERS({users: users}));
  // }

  getAllUsers() {
    return this.store.select('users');
  }

  getCurrentUser() {
    return this.store.select('currentUser');
  }
}
