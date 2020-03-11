import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Modes} from '../../models/enums/enums';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state';
import {SELECT_MODE} from '../../store/modes/modes.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mode$: Observable<string>;
  modes = Modes;

  constructor(private store: Store<AppState>) {
    this.mode$ = this.store.select('mode');
  }

  selectMode(newMode: string): void {
    this.store.dispatch(SELECT_MODE({newMode}));
  }
}
