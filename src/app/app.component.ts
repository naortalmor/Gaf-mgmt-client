import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './routes/services/auth.service';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  connectedUser:Observable<User>;
  routOptions:RouteOption[];

  constructor(public authService:AuthService,
              private usersService:UsersService) {
    this.routOptions = [];
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
