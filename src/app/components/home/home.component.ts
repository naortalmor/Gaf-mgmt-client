import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Modes } from '../../models/enums/enums';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { User } from '../../models/user';
import { AuthService } from '../../routes/services/auth.service';
import { RouteOptions } from '../../routes/route-options';
import { RouteOption } from '../../models/interfaces/route-option';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users$:Observable<User[]>;
  modes:typeof Modes;
  routOptions:RouteOption[];

  constructor(private store:Store<AppState>,
              private usersService:UsersService,
              public authService:AuthService) {
    this.users$ = this.usersService.getAllUsers();
    this.modes = Modes;
    this.routOptions = RouteOptions;
  }
}
