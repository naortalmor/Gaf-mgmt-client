import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { Person } from '../models/interfaces/person';
import { INIT_THIS_WEEK_PERSONS } from '../store/this-week-persons/this-week-persons.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MifgafService {

  constructor(private store: Store<AppState>,
    private http: HttpClient) {
  }

  initThisWeekPersons() {
    this.store.dispatch(INIT_THIS_WEEK_PERSONS({ thisWeekPersons: [
      {
        name: 'תמיר',
        age: 16
      },
      {
        name: 'תמיר',
        age: 16
      },
      {
        name: 'תמיר',
        age: 16
      }
    ] as Person[] }));
    this.http.get('http://localhost:1111/mifgafim/test')
      .subscribe((thisWeekPersons: Person[]) => this.store.dispatch(INIT_THIS_WEEK_PERSONS({ thisWeekPersons })));
  }
}
