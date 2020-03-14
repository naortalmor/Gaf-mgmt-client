import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {AppState} from 'src/app/store/state';
import {MifgafService} from 'src/app/services/mifgaf.service';
import {AuthService} from 'src/app/routes/services/auth.service';
import {Bubble} from '../../models/interfaces/bubble';
import {User} from '../../models/user';

const PAGE_HEADER: string = 'מפגפים!';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent {
  pageHeader: string;
  bubbles: Observable<Bubble[]>;
  winners: Subject<User[]>;
  demoBubbles: Bubble[];

  constructor(private store: Store<AppState>,
              private mifgafService: MifgafService,
              public auth: AuthService) {
    this.pageHeader = PAGE_HEADER;
    this.mifgafService.initInfoBubbles();
    this.bubbles = this.mifgafService.infoBubblesObs;
    this.winners = this.mifgafService.winnersObs;

    this.demoBubbles = this.getDemoBubbles();
  }

  add(winners: User[]) {
    this.mifgafService.add(winners);
  }

  private getDemoBubbles(): Bubble[] {
    return [
      {
        title: 'חיימון לימון',
        data: 'מוסיף המון'
      },
      {
        title: 'מה קרה לה?',
        data: 'מי יודע'
      },
      {
        title: 'ואתה יודע מי זה היה?',
        data: 'נכון.... מאוד...'
      }
    ];
  }
}
