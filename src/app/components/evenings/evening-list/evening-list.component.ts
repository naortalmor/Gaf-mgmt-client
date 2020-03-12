import { Evening } from 'src/app/models/evening';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-evening-list',
  templateUrl: './evening-list.component.html',
  styleUrls: ['./evening-list.component.css']
})
export class EveningListComponent {
  @Input() evenings:Evening[];
  @Output() selectEveningBubbled:EventEmitter<Evening>;

  constructor() {
    this.selectEveningBubbled = new EventEmitter<Evening>();
  }

  emitSelectedEvening(evening:Evening) {
    this.selectEveningBubbled.emit(evening);
  }
}
