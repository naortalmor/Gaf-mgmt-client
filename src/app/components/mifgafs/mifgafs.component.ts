import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { MifgafService } from 'src/app/services/mifgaf.service';
import { AuthService } from 'src/app/routes/services/auth.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Bubble } from '../../models/interfaces/bubble';

const PAGE_HEADER:string = 'מפגפים!';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent {
  pageHeader: string;
  winners: BehaviorSubject<User[]>;
  currentUser:Observable<User>;
  bubbles:BehaviorSubject<Bubble[]>;

  constructor(private store:Store<AppState>,
              private mifgafService:MifgafService,
              public auth:AuthService) {
    this.pageHeader = PAGE_HEADER;
    this.winners = this.mifgafService.winnersObs;
    this.bubbles = this.mifgafService.bubblesObs;
  }

  mifgafExist() {
    this.mifgafService.mifgafExist(this.winners.getValue());
  }
}
