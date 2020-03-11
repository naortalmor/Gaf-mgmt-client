import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { MifgafService } from 'src/app/services/mifgaf.service';

@Component({
  selector: 'app-mifgafs',
  templateUrl: './mifgafs.component.html',
  styleUrls: ['./mifgafs.component.css']
})
export class MifgafsComponent implements OnInit {
  thisWeekPersons:Observable<Person[]>;

  constructor(private store:Store<AppState>,
              private mifgafService:MifgafService) {
    this.thisWeekPersons = this.store.select('thisWeekPersons');
    this.mifgafService.initThisWeekPersons();
   }

  ngOnInit() {
    
  }
}
