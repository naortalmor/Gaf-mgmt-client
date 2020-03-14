import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from './routes/services/auth.service';
import {UsersService} from './services/users.service';
import {User} from './models/user';
import {Observable} from 'rxjs';
import {RouteOptions} from './routes/route-options';
import {RouteOption} from './models/interfaces/route-option';

const CONNECTED_USER_TEXT: string = 'שלום,';
const DISCONNECT_TEXT: string = 'התנתק';
const ADMIN_BUTTON_TEXT: string = 'מצב מנהל מערכת';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  connectedUser: Observable<User>;
  routOptions: RouteOption[];
  connectedUserText: string;
  disconnectButtonText: string;
  adminButtonText: string;

  constructor(public authService: AuthService,
              private usersService: UsersService) {
    this.routOptions = [];
    this.connectedUserText = CONNECTED_USER_TEXT;
    this.disconnectButtonText = DISCONNECT_TEXT;
    this.adminButtonText = ADMIN_BUTTON_TEXT;
    this.routOptions = RouteOptions;
    //this.usersService.initUsers();
  }

  ngOnInit() {
    this.connectedUser = this.usersService.getCurrentUser();
  }
}
