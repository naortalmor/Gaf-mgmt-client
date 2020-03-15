import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {AppState} from 'src/app/store/state';
import {MifgafService} from 'src/app/services/mifgaf.service';
import {AuthService} from 'src/app/routes/services/auth.service';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import { Bubble } from '../../models/interfaces/bubble';

const PAGE_HEADER: string = 'מפגפים!';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent {
  pageHeader: string;
  winners: Subject<User[]>;
  currentUser:Observable<User>;
  bubbles:Observable<Bubble[]>;

  constructor(private store: Store<AppState>,
              private mifgafService: MifgafService,
              public auth: AuthService,
              private usersService:UsersService) {
    this.pageHeader = PAGE_HEADER;
    this.mifgafService.initInfoBubbles();
    this.winners = this.mifgafService.winnersObs;
    this.currentUser = this.usersService.getCurrentUser();
    this.bubbles = this.mifgafService.bubblesObs;
  }

  mifgafExist(winners: User[]) {
    this.mifgafService.mifgafExist(winners);
  }
}
