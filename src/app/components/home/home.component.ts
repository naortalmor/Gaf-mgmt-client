import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Modes } from '../../models/enums/enums';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { SELECT_MODE } from '../../store/modes/modes.actions';
import { User } from '../../models/user';
import { AuthService } from '../../routes/services/auth.service';
import { RouteOptions } from '../../routes/route-options';
import { RouteOption } from '../../models/interfaces/route-option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mode$:Observable<string>;
  users$:Observable<User[]>;
  modes:typeof Modes;
  routOptions:RouteOption[];


  constructor(private store:Store<AppState>, public authService:AuthService) {
    this.mode$ = this.store.select('mode');
    this.users$ = this.store.select('users');
    this.modes = Modes;
    this.routOptions = RouteOptions;
  }

  selectMode(newMode:string):void {
    this.store.dispatch(SELECT_MODE({newMode}));
  }
}
