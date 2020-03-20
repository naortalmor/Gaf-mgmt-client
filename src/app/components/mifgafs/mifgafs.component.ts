import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { MifgafService } from 'src/app/services/mifgaf.service';
import { AuthService } from 'src/app/routes/services/auth.service';
import { User } from '../../models/user';
import { Bubble } from '../../models/interfaces/bubble';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

const PAGE_HEADER:string = 'מפגפים!';
const MANAGE_NEXT_MIFGAF_TEXT:string = 'אחראיים על המפגף הקרוב';
const MANAGE_NEXT_MIFGAF_TEXTT:string = 'אחראיים על המפגף אחריו';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent {
  pageHeader:string;
  winners:BehaviorSubject<User[]>;
  futureWinners:BehaviorSubject<User[]>;
  bubbles:BehaviorSubject<Bubble[]>;
  manageNextMifgafText:string;
  manageNextMifgafTextt:string;
  currWeek:BehaviorSubject<any>;
  nextWeek:BehaviorSubject<any>;
  faCalender = faCalendarAlt;

  constructor(private store:Store<AppState>,
              private mifgafService:MifgafService,
              public auth:AuthService) {
    this.pageHeader = PAGE_HEADER;
    this.winners = this.mifgafService.winnersObs;
    this.futureWinners = this.mifgafService.futureWinnersObs;
    this.bubbles = this.mifgafService.bubblesObs;
    this.manageNextMifgafText = MANAGE_NEXT_MIFGAF_TEXT;
    this.manageNextMifgafTextt = MANAGE_NEXT_MIFGAF_TEXTT;
    this.currWeek = this.mifgafService.currWeek;
    this.nextWeek = this.mifgafService.nextWeek;
  }

  mifgafExist() {
    this.mifgafService.mifgafExist(this.winners.getValue());
  }
}
