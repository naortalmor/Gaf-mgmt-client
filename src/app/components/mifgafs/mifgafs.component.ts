import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { MifgafService } from 'src/app/services/mifgaf.service';
import { AuthService } from 'src/app/routes/services/auth.service';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent implements OnInit {
  bubbles:Observable<{ title:string, data:string }[]>;
  winners:Observable<Person[][]>;

  constructor(private store:Store<AppState>,
              private mifgafService:MifgafService,
              public auth:AuthService) {
    this.mifgafService.initThisWeekPersons();
    this.mifgafService.initInfoBubbles();
    this.bubbles = this.mifgafService.infoBubblesObs;
    this.winners = this.mifgafService.winnersObs;
  }

  ngOnInit() {

  }
}
