import { Restaurant } from 'src/app/models/interfaces/restaurant';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnChanges {
  @Input() restaurant: Restaurant;
  shouldDisplayFullData: boolean;

  constructor() {
    this.shouldDisplayFullData = false;
  }

  ngOnChanges(changes) {
    if (this.restaurant) {
      console.log(this.restaurant);
    }
  }

  toggleRestaurantFullData() {
    this.shouldDisplayFullData = !this.shouldDisplayFullData;
    console.log(this.restaurant);
  }
}
