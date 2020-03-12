import { Restaurant } from 'src/app/models/interfaces/restaurant';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent  {
  @Input() restaurant: Restaurant;
  shouldDisplayFullData: boolean;

  constructor() {
    this.shouldDisplayFullData = false;
  }

  toggleRestaurantFullData() {
    this.shouldDisplayFullData = !this.shouldDisplayFullData;
  }
}
