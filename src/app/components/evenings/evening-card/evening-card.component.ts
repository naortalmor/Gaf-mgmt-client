import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evening } from 'src/app/models/evening';

@Component({
  selector: 'app-evening-card',
  templateUrl: './evening-card.component.html',
  styleUrls: ['./evening-card.component.css']
})
export class EveningCardComponent implements OnInit {

  @Input() evening:Evening;
  @Output() selectEvening:EventEmitter<number>;

  constructor() { 
    this.selectEvening = new EventEmitter<number>();
  }

  ngOnInit() {
    
  }

  emitSelectedEvening(evening:Evening) {
    this.selectEvening.emit(evening.id);
  }
}
