import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './routes/services/auth.service';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { Observable } from 'rxjs';

const CONNECTED_USER_TEXT:string = 'שלום,';
const DISCONNECT_TEXT:string = 'התנתק';
const ADMIN_BUTTON_TEXT:string = 'מצב מנהל מערכת';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  connectedUser:Observable<User>;
  routOptions:RouteOption[];
  connectedUserText:string;
  disconnectButtonText:string;
  adminButtonText:string;

  constructor(public authService:AuthService,
              private usersService:UsersService) {
    this.routOptions = [];
    this.connectedUserText = CONNECTED_USER_TEXT;
    this.disconnectButtonText = DISCONNECT_TEXT;
    this.adminButtonText = ADMIN_BUTTON_TEXT;
    //this.usersService.initUsers();
  }

  ngOnInit() {
    this.routOptions = [{
      buttonText: 'ניהול מפגפים',
      activeButtonStyle: 'active-route-button',
      routerLink: 'mifgafs'
    }, {
      buttonText: 'ניהול ערבי צוות',
      activeButtonStyle: 'active-route-button',
      routerLink: 'evenings'
    }, {
      buttonText: 'ארוחת צהריים',
      activeButtonStyle: 'active-route-button',
      routerLink: 'lunches'
    }];
    this.connectedUser = this.usersService.getCurrentUser();
  }
}

export interface RouteOption {
  buttonText:string
  activeButtonStyle:string;
  routerLink:string;
}
