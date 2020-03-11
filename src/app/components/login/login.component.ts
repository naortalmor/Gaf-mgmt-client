import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AuthService} from '../../routes/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

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
              private cdRef: ChangeDetectorRef) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['home']);
    }
  }

  ngOnDestroy() {
    this.authstateSubscription.unsubscribe();
  }

  login() {
    this.isLoading = true;
    this.authService.SignIn(this.email, this.password).then(value => {
      this.authstateSubscription = this.authService.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['home']);
        }
      });
    }).catch(reason => {
      this.isLoading = false;
      this.cdRef.detectChanges();
    });
  }
}
