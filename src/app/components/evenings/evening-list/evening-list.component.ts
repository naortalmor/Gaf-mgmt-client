import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EveningsComponent } from '../evenings.component';

@Component({
  selector: 'app-evening-list',
  templateUrl: './evening-list.component.html',
  styleUrls: ['./evening-list.component.css']
})
export class EveningListComponent implements OnInit {

  @Input() evenings: EveningsComponent;
  @Output() selectEveningBubbled:EventEmitter<number>;

  constructor() { 
    this.selectEveningBubbled = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  emitSelectedEvening($event) {
    this.selectEveningBubbled.emit($event);
  }
}
