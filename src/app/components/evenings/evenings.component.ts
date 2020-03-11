import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {
  events$: CalendarEvent[];

  constructor(private store: Store<AppState>) {
    this.events$ = this.store.select('events');
  }
   

  ngOnInit() {
  }

}
