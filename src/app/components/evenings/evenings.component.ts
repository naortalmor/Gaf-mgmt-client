import { EveningService } from 'src/app/services/evening.service';
import { INIT_EVENTS } from '../../store/events/events.action';
import { config } from '../../consts/config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Evening } from '../../models/evening';
import { CalendarEvent } from 'angular-calendar';
import { CREATE_EVENT, DELETE_EVENT } from 'src/app/store/events/events.action';

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {
  events$:Observable<CalendarEvent[]>;
  displayedPart:boolean;
  evenings:Observable<Evening[]>;
  selectedEvening:Evening;

  constructor(private store:Store<AppState>,
              private http:HttpClient,
              private eveningService:EveningService) {
    this.evenings = this.store.select('evenings');
    this.events$ = this.store.select('events');
    this.displayedPart = true;
    this.initEvents();
  };

  ngOnInit() {
  }

  initEvents():void {
    this.http.get(`${config.serverUrl}/events/getAllEvents`).subscribe((events:CalendarEvent[]) => {
      this.store.dispatch(INIT_EVENTS({
        events: events.map((event:CalendarEvent) => ({
          ...event, start: new Date(event.start),
          end: new Date(event.end)
        }))
      }));
    });
  }

  onSelectEveningBubbled(evening:Evening) {
    this.selectedEvening = evening;
  }

  onCloseEventDetails() {
    this.selectedEvening = undefined;
  }

  addEvent(event:CalendarEvent):void {
    this.http.post(`${config.serverUrl}/evenings/addEvent`, event).subscribe((newEvent:CalendarEvent) => {
      this.store.dispatch(CREATE_EVENT({
        newEvent: {
          ...newEvent,
          start: new Date(newEvent.start),
          end: new Date(newEvent.end)
        }
      }));
    });
  }

  deleteEvent(event:CalendarEvent):void {
    this.store.dispatch(DELETE_EVENT({deleteEvent: event}));
  }

  toggleDisplayedPart():void {
    this.displayedPart = !this.displayedPart;
  }

}
