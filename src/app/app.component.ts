import { SELECT_MODE } from './store/modes/modes.actions';
import { AppState } from './store/state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Modes } from './models/enums/enums';
import { User } from './models/interfaces/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  mode$:Observable<string>;
  users$:Observable<User[]>;
  modes:typeof Modes;

  constructor(private store:Store<AppState>,
              private usersService:UsersService) {
    this.usersService.initUsers();
    this.mode$ = this.store.select('mode');
    this.users$ = this.store.select('users');
    this.modes = Modes;
  }

  selectMode(newMode:string):void {
    this.store.dispatch(SELECT_MODE({newMode}));
  }
}
