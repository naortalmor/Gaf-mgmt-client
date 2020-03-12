import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../routes/services/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/state';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css']
})
export class GuestPageComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router,
              private store: Store<AppState>) {
    this.store.select('currentUser').subscribe(user => {
      if (this.authService.isUser()) {
        this.router.navigate(['home']);
      }
    });
  }

  ngOnInit() {
  }

}
