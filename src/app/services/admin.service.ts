import {Injectable} from '@angular/core';
import {AuthService} from '../routes/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public afs: AngularFirestore,
              public authService: AuthService) {
  }

  getAllUsersPermissions() {
    this.afs.doc<User[]>(`users/`).valueChanges().subscribe(users => {
    });
  }
}
