import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-schedual-new-evening',
  templateUrl: './schedual-new-evening.component.html',
  styleUrls: ['./schedual-new-evening.component.css']
})
export class SchedualNewEveningComponent {
  @Input() events:CalendarEvent[];
  @Output() eventAdded:EventEmitter<CalendarEvent>;
  @Output() eventDeleted:EventEmitter<CalendarEvent>;

  constructor() {
    this.eventAdded = new EventEmitter<CalendarEvent>();
    this.eventDeleted = new EventEmitter<CalendarEvent>();
  }

  addEvent(event:CalendarEvent):void {
    this.eventAdded.emit(event);
  }

  deleteEvent(event:CalendarEvent):void {
    this.eventDeleted.emit(event);
  }

}
