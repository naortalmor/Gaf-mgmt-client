import {Injectable, NgZone} from '@angular/core';
import {User} from '../../models/user';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/store/state';
import {INIT_CURRENT_USER} from 'src/app/store/users/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private store: Store<AppState>
  ) {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage !== 'undefined') {
      this.userData = JSON.parse(userLocalStorage);
    }
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(authUser => {
      if (authUser) {
        localStorage.setItem('user', JSON.stringify(authUser));
        this.userData = authUser;
        this.afs.doc<User>(`users/${authUser.uid}`).valueChanges().subscribe((user:User) => {
          this.userData = user;
          this.store.dispatch(INIT_CURRENT_USER({currentUser: user}));
          localStorage.setItem('user', JSON.stringify(this.userData));
        });
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result: auth.UserCredential) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['home']);
        // });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
        throw error;
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    // const user = JSON.parse(localStorage.getItem('user'));
    return (this.userData !== null);
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result: auth.UserCredential) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['home']);
        // });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        guest: true
      }
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = null;
      this.router.navigate(['login']);
    });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // // Sign up with email/password
  // SignUp(email, password) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       /* Call the SendVerificaitonMail() function when new user sign
  //       up and returns promise */
  //       this.SendVerificationMail();
  //       this.SetUserData(result.user);
  //     }).catch((error) => {
  //       window.alert(error.message);
  //     });
  // }

  // // Send email verfificaiton when new user sign up
  // SendVerificationMail() {
  //   return this.afAuth.auth.currentUser.sendEmailVerification()
  //     .then(() => {
  //       this.router.navigate(['verify-email-address']);
  //     });
  // }

  // // Reset Forggot password
  // ForgotPassword(passwordResetEmail) {
  //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert('Password reset email sent, check your inbox.');
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }

  ///// Role-based Authorization //////

  isAdmin(): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(allowed);
  }

  isUser(): boolean {
    const allowed = ['admin', 'user'];
    return this.checkAuthorization(allowed);
  }


  // determines if user has matching role
  private checkAuthorization(allowedRoles: string[]): boolean {
    if (!this.userData) return false;
    for (const role of allowedRoles) {
      if (this.userData.roles[role]) {
        return true;
      }
    }
    return false;
  }

}
