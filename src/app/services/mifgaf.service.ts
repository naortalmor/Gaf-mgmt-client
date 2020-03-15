import {config} from './../consts/config';
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

@Injectable({providedIn: 'root'})
export class MifgafService {
  winnersObs: BehaviorSubject<User[]>;
  bubblesObs: Subject<>;

  infoBubblesObs: Subject<{ title: string, data: string }[]>;
  private infoBubbles: { title: string, data: string }[];

  constructor(private store: Store<AppState>,
              private http: HttpClient,
              private db: AngularFirestore,
              private usersService:UsersService) {
    this.winnersObs = new BehaviorSubject<User[]>([]);
    this.bubblesObs = new Subject();
    this.infoBubblesObs = new Subject();
    this.getDemoBubbles();
    this.getWinners();
  }

  initInfoBubbles() {
    this.infoBubbles = [];
    this.http.get(`${config.serverUrl}/mifgafim/howLongShouldIWaitToWin`)
      .subscribe((howlong: string) => this.insertBubble({
        title: 'מתי אני מביא?',
        data: howlong
      }));
    this.http.get(`${config.serverUrl}/mifgafim/whenIWonLastly`)
      .subscribe((when: string) => this.insertBubble({
        title: 'מתי הבאתי לאחרונה?',
        data: when
      }));
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

  private insertBubble(bubble): void {
    let bubbles = [...this.infoBubbles];
    bubbles.push(bubble);
    this.infoBubblesObs.next(bubbles);
    this.infoBubbles = bubbles;
  }
}
