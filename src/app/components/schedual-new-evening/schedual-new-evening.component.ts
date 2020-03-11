import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-schedual-new-evening',
  templateUrl: './schedual-new-evening.component.html',
  styleUrls: ['./schedual-new-evening.component.css']
})
export class SchedualNewEveningComponent implements OnInit {
  @Input() events:CalendarEvent[];

  constructor() { }

  ngOnInit() {
  }

}
