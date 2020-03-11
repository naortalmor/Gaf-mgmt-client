import { Restaurant } from './../../../models/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  @Input() restaurants: Restaurant[];
  toAddRestaurant = false;


  onAddRestaurant(){
this.toAddRestaurant = true
console.log(this.toAddRestaurant);

  }
}


