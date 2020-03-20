import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { INIT_USERS } from '../store/users/user.actions';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private store:Store<AppState>,
              private db:AngularFirestore) {
    this.initUsers();
  }

  initUsers():void {
    this.db.collection('/users').valueChanges().subscribe((users:User[]) => {
      this.store.dispatch(INIT_USERS({users: users}));
    });
  }

  getAllUsers() {
    return this.store.select('users');
  }

  getCurrentUser() {
    return this.store.select('currentUser');
  }
}
