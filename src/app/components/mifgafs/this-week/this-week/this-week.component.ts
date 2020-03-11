import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css']
})
export class ThisWeekComponent implements OnInit {
  @Input() currentWeekPersons:Person[];

  constructor() { }

  ngOnInit() {
  }

}
