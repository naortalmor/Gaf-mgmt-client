import { Component, OnInit } from '@angular/core';
import { EveningDetailsComponent } from './evening-details/evening-details.component';
import { AppState } from './../../store/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EveningService } from 'src/app/services/evening.service';
import { Evening } from '../../models/evening';
import { async } from '@angular/core/testing';
import { CalendarEvent } from 'angular-calendar';
import { CREATE_EVENT, DELETE_EVENT } from 'src/app/store/events/events.action';

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {
  events$: Observable<CalendarEvent[]>;
  displayedPart: boolean;
  evenings: Evening[];
  selectedEvening: Evening;

  constructor(private store: Store<AppState>,
              private eveningService: EveningService) {
    this.store.select('evenings').subscribe(result => {
      this.evenings = result;
    });
    this.events$ = this.store.select('events');
    this.displayedPart = true;
  };

  ngOnInit() {
  }

  onSelectEveningBubbled($event) {
    this.selectedEvening = this.evenings.find(eve => eve.id === $event)
  }

  onCloseEventDetails() {
    this.selectedEvening = undefined;
  }

  addEvent(event:CalendarEvent): void {
    this.store.dispatch(CREATE_EVENT({newEvent:event}));
  }

  deleteEvent(event:CalendarEvent): void {
    this.store.dispatch(DELETE_EVENT({deleteEvent:event}));
  }

  toggleDisplayedPart(): void {
    this.displayedPart = !this.displayedPart;
  }

}
