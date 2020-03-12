import { config } from './../consts/config';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { Person } from '../models/interfaces/person';
import { INIT_THIS_WEEK_PERSONS } from '../store/this-week-persons/this-week-persons.actions';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MifgafService {

  infoBubblesObs:Subject<{ title: string, data: string }[]>;
  private infoBubbles: { title: string, data: string }[];

  constructor(private store: Store<AppState>,
    private http: HttpClient) {
  }

  initThisWeekPersons() {
    this.http.get(`${config.serverUrl}/mifgafim/winners`)
      .subscribe((thisWeekPersons: Person[]) => this.store.dispatch(INIT_THIS_WEEK_PERSONS({ thisWeekPersons })));
  }

  initInfoBubbles() {
    this.infoBubbles = [];  
    this.http.get(`${config.serverUrl}/mifgafim/howLongShouldIWaitToWin`)
      .subscribe((howlong: string) => this.insertBubble({
        title: "מתי אני מביא?",
        data: howlong
      }));
      this.http.get(`${config.serverUrl}/mifgafim/whenIWonLastly`)
      .subscribe((when: string) => this.insertBubble({
        title: "מתי הבאתי לאחרונה?",
        data: when
      }));
  }

  private insertBubble(bubble):void {
    let bubbles = [...this.infoBubbles];
    bubbles.push(bubble);
    this.infoBubblesObs.next(bubbles);
    this.infoBubbles = bubbles;
  }


}
