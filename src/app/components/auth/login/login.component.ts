import {Component} from '@angular/core';
import {AuthService} from '../../../routes/services/auth.service';
import {Router} from '@angular/router';
import {AppState} from '../../../store/state';
import {Store} from '@ngrx/store';
import {User} from '../../../models/user';
import {FormControl, Validators} from '@angular/forms';

const APP_NAME: string = 'נגיף';
const APP_PURPOSE: string = 'מערכת לניהול גף';
const CONNECT_BUTTON_TEXT: string = 'התחבר דרך ';
const LOADING: string = 'טוען משתמש...';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean;
  appName: string;
  appPurpose: string;
  connectButtonText: string;
  loadingText: string;
  statuses: { view: string, value: string }[];
  statusesControl = new FormControl('', Validators.required);
  status = new FormControl('', Validators.required);

  constructor(public authService: AuthService,
              public router: Router,
              private store: Store<AppState>) {
    this.isLoading = false;
    this.appName = APP_NAME;
    this.appPurpose = APP_PURPOSE;
    this.connectButtonText = CONNECT_BUTTON_TEXT;
    this.loadingText = LOADING;
    this.statuses = [{view: 'קבע', value: 'keva'}, {view: 'חובה', value: 'hova'}];
    this.store.select('currentUser').subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
    });
  }

  loginGoogle() {
    if (!this.statusesControl.valid) {
      alert('תמלא את כל השדות בבקשה');
    } else {
      this.isLoading = true;
      this.authService.GoogleAuth(this.statusesControl.value).catch(reason => {
        this.isLoading = false;
      });
    }
  }
}
