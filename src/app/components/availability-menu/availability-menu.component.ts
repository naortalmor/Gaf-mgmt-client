import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-availability-menu',
  templateUrl: './availability-menu.component.html',
  styleUrls: ['./availability-menu.component.css']
})
export class AvailabilityMenuComponent implements OnInit {

  @Output() optionChosen:EventEmitter<number>;

  constructor() {
    this.optionChosen = new EventEmitter<number>();
   }

  ngOnInit() {
  }

  choseOption (option:number): void {
    this.optionChosen.emit(option);
  }

}
