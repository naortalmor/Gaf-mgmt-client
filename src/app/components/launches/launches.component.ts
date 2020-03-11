import { Restaurant } from './../../models/restaurant';
import { RestaurantsService } from './../../services/restaurants.service';
import { AppState } from './../../store/state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent {
  restaurants$: Observable<Restaurant[]>;

  constructor(private store: Store<AppState>,
              private restaurantsService: RestaurantsService) {
      this.restaurants$ = this.store.select('resturants');
  }
}
