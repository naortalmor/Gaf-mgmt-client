import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {AppState} from '../store/state';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';
import {firestore} from 'firebase/app';
import {UsersService} from './users.service';
import {formatDate} from '@angular/common';
import {Bubble} from '../models/interfaces/bubble';

@Injectable({providedIn: 'root'})
export class MifgafService {
  winnersObs: BehaviorSubject<User[]>;
  bubblesObs: BehaviorSubject<Bubble[]>;

  constructor(private store: Store<AppState>,
              private http: HttpClient,
              private db: AngularFirestore,
              private usersService:UsersService) {
    this.winnersObs = new BehaviorSubject<User[]>([]);
    this.bubblesObs = new BehaviorSubject<Bubble[]>([]);
    this.getDemoBubbles();
    this.getWinners();
  }

  getWinners() {
    this.db.collection('/users').valueChanges().subscribe((users: User[]) => {
      if (users.length > 3) {
        const kevaWinners = [];
        const kevaUsers = users.filter(user => user.roles.status === 'keva');
        let kevaMinRound = kevaUsers.reduce((prev, curr) => prev.currentRound < curr.currentRound ? prev.currentRound : curr.currentRound);
        while (kevaWinners.length < 2) {
          kevaUsers.forEach(user => {
            if (kevaWinners.length < 2) {
              if (user.currentRound === kevaMinRound) {
                kevaWinners.push(user);
              }
            }
          });
          kevaMinRound = kevaMinRound + 1;
        }

        const hovaWinners = [];
        const hovaUsers = users.filter(user => user.roles.status === 'hova');
        let hovaMinRound = hovaUsers.reduce((prev, curr) => prev.currentRound < curr.currentRound ? prev.currentRound : curr.currentRound);
        while (hovaWinners.length < 1) {
          hovaUsers.forEach(user => {
            if (hovaWinners.length < 1) {
              if (user.currentRound === hovaMinRound) {
                hovaWinners.push(user);
              }
            }
          });
          hovaMinRound = hovaMinRound + 1;
        }

        this.winnersObs.next([...kevaWinners, ...hovaWinners]);
      }
    });
  }

  mifgafExist(winners: User[]) {
    winners.forEach(user => {
      this.db.collection('users').doc(`${user.uid}`).set({currentRound: user.currentRound + 1, lastMifgafTime: firestore.Timestamp.fromDate(new Date())}, {merge: true});
      user.lastMifgafTime = firestore.Timestamp.fromDate(new Date());
      this.db.collection('history_mifgafs_users').add(user);
    });
  }

  private getDemoBubbles() {
    this.usersService.getCurrentUser().subscribe(user => {
      if (user) {
        this.bubblesObs.next([
          {
            title: 'חיימון לימון',
            data: 'מוסיף המון'
          },
          {
            title: 'מה קרה לה?',
            data: 'מי יודע'
          },
          {
            title: 'ואתה יודע מי זה היה?',
            data: 'נכון.... מאוד...'
          },
          {
            title: 'מתי עשיתי פעם אחרונה?',
            data: formatDate(user.lastMifgafTime.toMillis(), 'dd.MM.y', 'en-us')
          }
        ]);
      }
    });
  }
}
