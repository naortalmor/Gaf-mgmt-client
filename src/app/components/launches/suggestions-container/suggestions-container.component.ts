import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

@Component({
  selector: 'app-suggestions-container',
  templateUrl: './suggestions-container.component.html',
  styleUrls: ['./suggestions-container.component.css']
})
export class SuggestionsContainerComponent {
  @Input() restaurants: Restaurant[];
  @Output() addRestaurant = new EventEmitter<Restaurant>();

  onAddRestaurant($event: Restaurant){
    this.addRestaurant.emit($event);
  }
}
