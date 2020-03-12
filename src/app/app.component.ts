import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './routes/services/auth.service';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'GAF Management';
  user:User;

  constructor(public authService:AuthService,
              private usersService:UsersService,
              private cdRef:ChangeDetectorRef) {
    //this.usersService.initUsers();
  }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe(user => {
      this.user = user;
      this.cdRef.detectChanges();
    });
  }
}
