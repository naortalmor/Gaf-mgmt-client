import { SELECT_MODE } from './store/modes/modes.actions';
import { AppState } from './store/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Modes } from './models/enums/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  mode$:Observable<string>;
  modes:typeof Modes;

  constructor(private store:Store<AppState>) {
    this.mode$ = this.store.select('mode');
    this.modes = Modes;
  }

  selectMode(newMode:string):void {
    this.store.dispatch(SELECT_MODE({newMode}));
  }
}
