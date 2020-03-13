import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-availability-menu',
  templateUrl: './availability-menu.component.html',
  styleUrls: ['./availability-menu.component.css']
})
export class AvailabilityMenuComponent {
  @Output() optionChosen:EventEmitter<number>;

  constructor() {
    this.optionChosen = new EventEmitter<number>();
  }

  choseOption(option:number):void {
    this.optionChosen.emit(option);
  }

}
