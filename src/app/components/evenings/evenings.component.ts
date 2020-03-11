import { Component, OnInit } from '@angular/core';
import { EveningDetailsComponent } from './evening-details/evening-details.component';
import { AppState } from './../../store/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EveningService } from 'src/app/services/evening.service';
import { Evening } from '../../models/evening';
import { async } from '@angular/core/testing';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {
  events$: Observable<CalendarEvent[]>;

  evenings: Evening[];
  selectedEvening: Evening;
  
  constructor(private store: Store<AppState>,
              private eveningService: EveningService) { 
    this.store.select('evenings').subscribe(result => {
      this.evenings = result;
    });
  }

  ngOnInit() {
  }

  onSelectEveningBubbled($event) {
    this.selectedEvening = this.evenings[$event]
  }

  onCloseEventDetails() {
    this.selectedEvening = undefined;
  }
}
