import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from './routes/services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'GAF Management';

  constructor(public authService: AuthService,
    private usersService:UsersService) {
    this.usersService.initUsers();
  }
}
