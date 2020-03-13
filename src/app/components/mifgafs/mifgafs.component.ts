import { Component } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { MifgafService } from 'src/app/services/mifgaf.service';
import { AuthService } from 'src/app/routes/services/auth.service';
import { Bubble } from '../../models/interfaces/bubble';

const PAGE_HEADER:string = 'מפגפים!';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent {
  pageHeader:string;
  bubbles:Observable<Bubble[]>;
  winners:Observable<Person[][]>;

  demoBubbles:Bubble[];

  constructor(private store:Store<AppState>,
              private mifgafService:MifgafService,
              public auth:AuthService) {
    this.pageHeader = PAGE_HEADER;
    this.mifgafService.initThisWeekPersons();
    this.mifgafService.initInfoBubbles();
    this.bubbles = this.mifgafService.infoBubblesObs;
    this.winners = this.mifgafService.winnersObs;

    this.demoBubbles = this.getDemoBubbles();
  }

  private getDemoBubbles():Bubble[] {
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
