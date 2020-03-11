import { Restaurant } from 'src/app/models/restaurant';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
}
