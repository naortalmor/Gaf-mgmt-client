import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { AppState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CREATE_EVENT } from 'src/app/store/events/events.action';

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {
  events$: Observable<CalendarEvent[]>;

  constructor(private store: Store<AppState>) {
    this.events$ = this.store.select('events');
  }
   

  ngOnInit() {
  }

  addEvent(event:CalendarEvent): void {
    this.store.dispatch(CREATE_EVENT({newEvent:event}));
  }
  
}
