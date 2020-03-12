import { Restaurant } from '../../../models/interfaces/restaurant';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  @Input() restaurants: Restaurant[];
  toAddRestaurant = false;
  @Output() addRestaurant = new EventEmitter<Restaurant>();


  onAddRestaurant(){
  this.toAddRestaurant = !this.toAddRestaurant
console.log(this.toAddRestaurant);

  }

  newRestaurant($event: Restaurant){
      this.addRestaurant.emit($event);
  }

  closeForm(){
    this.toAddRestaurant = false
  }
}


