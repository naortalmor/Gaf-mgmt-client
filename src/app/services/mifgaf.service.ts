import {config} from './../consts/config';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {AppState} from '../store/state';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';

@Injectable({providedIn: 'root'})
export class MifgafService {
  winnersObs: Subject<User[]>;

  infoBubblesObs: Subject<{ title: string, data: string }[]>;
  private infoBubbles: { title: string, data: string }[];

  constructor(private store: Store<AppState>,
              private http: HttpClient,
              private db: AngularFirestore) {
    this.winnersObs = new Subject();
    this.infoBubblesObs = new Subject();
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
    this.db.collection('/users').valueChanges().subscribe(users => {
      const kevaWinners = [];
      const kevaUsers = users.filter(user => user.roles.status === 'keva');
      let kevaMinRound: number = kevaUsers.reduce((prev, curr) => prev.currentRound < curr.currentRound ? prev.currentRound : curr.currentRound);
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
      let hovaMinRound: number = hovaUsers.reduce((prev, curr) => prev.currentRound < curr.currentRound ? prev.currentRound : curr.currentRound);
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
    });
  }

  add(winners: User[]) {
    winners.forEach(user => {
      this.db.collection('users').doc(`${user.uid}`).set({currentRound: user.currentRound + 1}, {merge: true});
    });
  }

  private insertBubble(bubble): void {
    let bubbles = [...this.infoBubbles];
    bubbles.push(bubble);
    this.infoBubblesObs.next(bubbles);
    this.infoBubbles = bubbles;
  }
}
