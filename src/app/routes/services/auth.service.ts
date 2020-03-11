import {Injectable, NgZone} from '@angular/core';
import {User} from '../../models/user';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { INIT_CURRENT_USER } from 'src/app/store/users/user.actions';

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
    private store:Store<AppState>
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
       // this.store.dispatch(INIT_CURRENT_USER({currentUser: this.userData}));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result: auth.UserCredential) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
        throw error;
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result: auth.UserCredential) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
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
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
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

}
