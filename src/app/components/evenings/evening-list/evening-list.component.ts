import { Evening } from 'src/app/models/evening';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evening-list',
  templateUrl: './evening-list.component.html',
  styleUrls: ['./evening-list.component.css']
})
export class EveningListComponent implements OnInit {

  @Input() evenings: Evening[];
  @Output() selectEveningBubbled: EventEmitter<number>;

  constructor() {
    this.selectEveningBubbled = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  emitSelectedEvening($event) {
    this.selectEveningBubbled.emit($event);
  }
}
