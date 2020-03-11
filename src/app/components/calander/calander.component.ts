import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  @Input() events:CalendarEvent[];
  viewDate: Date = new Date();



  constructor() { }

  ngOnInit() {
  }

}
