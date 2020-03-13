import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../../routes/services/auth.service';
import { Router } from '@angular/router';
import { AppState } from '../../../store/state';
import { Store } from '@ngrx/store';

const APP_NAME:string = 'נגיף';
const APP_PURPOSE:string = 'מערכת לניהול גף';
const CONNECT_BUTTON_TEXT:string = 'התחבר דרך ';
const LOADING:string = 'טוען משתמש...';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean;
  appName:string;
  appPurpose:string;
  connectButtonText:string;
  loadingText:string;

  constructor(public authService:AuthService,
              public router:Router,
              private cdRef:ChangeDetectorRef,
              private store:Store<AppState>) {
    this.isLoading = false;
    this.appName = APP_NAME;
    this.appPurpose = APP_PURPOSE;
    this.connectButtonText = CONNECT_BUTTON_TEXT;
    this.loadingText = LOADING;
    this.store.select('currentUser').subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
    });
  }

  loginGoogle() {
    this.isLoading = true;
    this.authService.GoogleAuth().catch(reason => {
      this.isLoading = false;
      this.cdRef.detectChanges();
    });
  }
}
