import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evening } from 'src/app/models/evening';

@Component({
  selector: 'app-evening-card',
  templateUrl: './evening-card.component.html',
  styleUrls: ['./evening-card.component.css']
})
export class EveningCardComponent {
  @Input() evening:Evening;
  @Output() selectEvening:EventEmitter<void>;

  constructor() {
    this.selectEvening = new EventEmitter<void>();
  }

  emitSelectedEvening() {
    this.selectEvening.emit();
  }
}
