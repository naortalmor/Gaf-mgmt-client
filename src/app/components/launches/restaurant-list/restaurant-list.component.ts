import { Restaurant } from '../../../models/interfaces/restaurant';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  @Input() restaurants:Restaurant[];
  @Output() addRestaurant = new EventEmitter<Restaurant>();

  toAddRestaurant = false;

  onAddRestaurant() {
    this.toAddRestaurant = !this.toAddRestaurant;
    console.log(this.toAddRestaurant);

  }

  newRestaurant($event:Restaurant) {
    this.addRestaurant.emit($event);
  }

  closeForm() {
    this.toAddRestaurant = false;
  }
}


