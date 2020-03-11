import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from './routes/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'GAF Management';

  constructor(public authService: AuthService) {
  }
}
