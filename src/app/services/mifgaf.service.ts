import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store/state';
import { Person } from '../models/interfaces/person';
import { INIT_THIS_WEEK_PERSONS } from '../store/this-week-persons/this-week-persons.actions';

@Injectable({providedIn: 'root'})
export class MifgafService {

  constructor(private store:Store<AppState>) {
  }

  initThisWeekPersons() {
    const thisWeekPersons:Person[] = [
      {name: 'Tamir', age: 1},
      {name: 'Lior', age: 2}
    ];

    this.store.dispatch(INIT_THIS_WEEK_PERSONS({thisWeekPersons}));
  }
}
