import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { firestore } from 'firebase/app';
import { UsersService } from './users.service';
import { formatDate } from '@angular/common';
import { Bubble } from '../models/interfaces/bubble';
import { config } from '../consts/config';

@Injectable({providedIn: 'root'})
export class MifgafService {
  winnersObs:BehaviorSubject<User[]>;
  futureWinnersObs: BehaviorSubject<User[]>;
  currWeek: BehaviorSubject<any>;
  nextWeek: BehaviorSubject<any>;
  bubblesObs:BehaviorSubject<Bubble[]>;

  infoBubblesObs:Subject<Bubble[]>;
  private infoBubbles:Bubble[];

  constructor(private store:Store<AppState>,
              private http:HttpClient,
              private db:AngularFirestore,
              private usersService: UsersService) {
    this.winnersObs = new BehaviorSubject<User[]>([]);
    this.futureWinnersObs = new BehaviorSubject<User[]>([]);
    this.currWeek = new BehaviorSubject<any>('');
    this.nextWeek = new BehaviorSubject<any>('');
    this.bubblesObs = new BehaviorSubject<Bubble[]>([]);
    this.infoBubblesObs = new Subject<Bubble[]>();
    this.getDemoBubbles();
    this.getWinners();
  }

  initInfoBubbles() {
    this.infoBubbles = [];
    this.http.get(`${config.serverUrl}/mifgafim/howLongShouldIWaitToWin`)
      .subscribe((howlong:string) => this.insertBubble({
        title: 'מתי אני מביא?',
        data: howlong
      }));
    this.http.get(`${config.serverUrl}/mifgafim/whenIWonLastly`)
      .subscribe((when:string) => this.insertBubble({
        title: 'מתי הבאתי לאחרונה?',
        data: when
      }));
  }

  getWinners() {
    this.db.collection('/users').valueChanges().subscribe((users:User[]) => {
      if (users.length > 3) {
        const kevaWinners = [];
        const kevaUsers = users.filter(user => user.roles.status === 'keva');
        let currentRoundKevaNums = kevaUsers.map(value => value.currentRound);
        let kevaMinRound = Math.min(...currentRoundKevaNums);
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
        let currentRoundHovaNums = hovaUsers.map(value => value.currentRound);
        let hovaMinRound = Math.min(...currentRoundHovaNums);
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
        this.currWeek.next(kevaWinners[0].nextMifgafTime.seconds * 1000);
        this.nextWeek.next((kevaWinners[0].nextMifgafTime.seconds + 604800) * 1000);

        let futureWinners = users.filter(user => (user.nextMifgafTime.seconds * 1000) - (kevaWinners[0].nextMifgafTime.seconds + 604800) * 1000 <= 86400000 &&
          (user.nextMifgafTime.seconds * 1000) - (kevaWinners[0].nextMifgafTime.seconds + 604800) * 1000 >= -86400000);
        this.futureWinnersObs.next(futureWinners);
      }
    });
  }

  mifgafExist(winners:User[]) {
    winners.forEach(user => {
      this.db.collection('users').doc(`${user.uid}`).set({
        currentRound: user.currentRound + 1,
        lastMifgafTime: firestore.Timestamp.fromDate(new Date())
      }, {merge: true});
      user.lastMifgafTime = firestore.Timestamp.fromDate(new Date());
      this.db.collection('history_mifgafs_users').add(user);
    });
    this.futureWinners();
  }

  futureWinners() {
    this.db.collection('/users').get().subscribe(userss => {
      let users = userss.docs.map(doc => doc.data());
      if (users.length > 3) {

        this.db.collection('/mifgaf_time_saver').doc('mifgaf_time_saver').get().subscribe(mifgafTimeSaver => {
          let time = mifgafTimeSaver.data();

          let usersWithOutFuture = users.filter(user => user.nextMifgafTime < firestore.Timestamp.now());

          if (usersWithOutFuture.length) {
            let kevaWinners = [];
            const kevaUsers = usersWithOutFuture.filter(user => user.roles.status === 'keva');
            while (kevaUsers.length >= 2) {
              let currentRoundKevaNums = kevaUsers.map(value => value.currentRound);
              let kevaMinRound = Math.min(...currentRoundKevaNums);
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

              kevaWinners.forEach(winner => {
                this.db.collection('users').doc(`${winner.uid}`).set({nextMifgafTime: new Date(time.keva.seconds * 1000)}, {merge: true});
                let removeUserIndex = kevaUsers.findIndex(noFutureUser => noFutureUser.uid === winner.uid);
                kevaUsers.splice(removeUserIndex, 1);
              });
              time.keva.seconds = time.keva.seconds + 604800;
              this.db.collection('mifgaf_time_saver').doc('mifgaf_time_saver').set({keva: new Date(time.keva.seconds * 1000)}, {merge: true});
              kevaWinners = [];
            }


            let hovaWinners = [];
            const hovaUsers = usersWithOutFuture.filter(user => user.roles.status === 'hova');
            while (hovaUsers.length >= 1) {
              let currentRoundHovaNums = hovaUsers.map(value => value.currentRound);
              let hovaMinRound = Math.min(...currentRoundHovaNums);
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

              hovaWinners.forEach(winner => {
                this.db.collection('users').doc(`${winner.uid}`).set({nextMifgafTime: new Date(time.hova.seconds * 1000)}, {merge: true});
                let removeUserIndex = hovaUsers.findIndex(noFutureUser => noFutureUser.uid === winner.uid);
                hovaUsers.splice(removeUserIndex, 1);
              });
              time.hova.seconds = time.hova.seconds + 604800;
              this.db.collection('mifgaf_time_saver').doc('mifgaf_time_saver').set({hova: new Date(time.hova.seconds * 1000)}, {merge: true});
              hovaWinners = [];
            }
          }
        });
      }
    });
  }

  private getDemoBubbles() {
    this.usersService.getCurrentUser().subscribe(user => {
      if (user) {
        this.db.collection('mifgaf_time_saver').doc('mifgaf_time_saver').get().subscribe(mifgafTimeSaver => {
          let time = mifgafTimeSaver.data();
          this.bubblesObs.next([
            {
              title: 'מתי עשיתי פעם אחרונה?',
              data: formatDate(user.lastMifgafTime.toMillis(), 'dd.MM.y', 'en-us')
            },
            {
              title: 'מתי הפעם הבאה שלי?',
              data: user.nextMifgafTime > firestore.Timestamp.now() ? formatDate(user.nextMifgafTime.toMillis(), 'dd.MM.y', 'en-us') :
                formatDate(time.keva.seconds * 1000, 'dd.MM.y', 'en-us')
            }
          ]);
        });
      }
    });
  }

  private insertBubble(bubble):void {
    let bubbles = [...this.infoBubbles];
    bubbles.push(bubble);
    this.infoBubblesObs.next(bubbles);
    this.infoBubbles = bubbles;
  }
}
