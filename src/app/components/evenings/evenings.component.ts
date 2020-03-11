import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {colors} from '../../models/enums/color'

@Component({
  selector: 'app-evenings',
  templateUrl: './evenings.component.html',
  styleUrls: ['./evenings.component.css']
})
export class EveningsComponent implements OnInit {

  events: CalendarEvent[] =  [{
    start: new Date(),
    end: new Date(),
    title: 'I cant',
    color: colors.red,
    allDay: true,
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
