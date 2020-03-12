import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AuthService} from '../../../routes/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AppState} from '../../../store/state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  authstateSubscription: Subscription;

  constructor(public authService: AuthService,
              public router: Router,
              private cdRef: ChangeDetectorRef,
              private store: Store<AppState>) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['home']);
    }
    this.store.select('currentUser').subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
    });
  }

  ngOnDestroy() {
    if (this.authstateSubscription) {
      this.authstateSubscription.unsubscribe();
    }
  }

  login() {
    this.isLoading = true;
    this.authService.SignIn(this.email, this.password).catch(reason => {
      this.isLoading = false;
      this.cdRef.detectChanges();
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
