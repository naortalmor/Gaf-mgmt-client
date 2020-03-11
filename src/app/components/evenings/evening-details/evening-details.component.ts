import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evening } from 'src/app/models/evening';

@Component({
  selector: 'app-evening-details',
  templateUrl: './evening-details.component.html',
  styleUrls: ['./evening-details.component.css']
})
export class EveningDetailsComponent implements OnInit {
  
  @Input() selectedEvening:Evening;
  @Output() closeEveningEmittter:EventEmitter<void>;

  constructor() { 
    this.closeEveningEmittter = new EventEmitter();
  }

  ngOnInit() {
  }

  closeEveningDetails() {
    this.closeEveningEmittter.emit();
  }


}
