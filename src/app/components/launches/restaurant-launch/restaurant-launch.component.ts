import { Restaurant } from '../../../models/interfaces/restaurant';
import { FilterSuggestions } from '../../../models/interfaces/suggestion-filter';
import { CHANGE_FILTER } from '../../../store/suggestions-filter/suggestions-filter.actions';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-launch',
  templateUrl: './restaurant-launch.component.html',
  styleUrls: ['./restaurant-launch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantLaunchComponent {
 /* changeTab(newTab:string):void {
    this.selectedTab = newTab;
  }

  onAddRestaurant(restaurant:Restaurant) {
    this.restaurantsService.saveNewRestaurant(restaurant);
  }

  onOpenSurvey():void {
    this.restaurantsService.updateRestaurantSurveyStatus(true);
  }

  onSurveySubmitted(restaurant:Restaurant) {
    this.restaurantsService.updateRestaurantSurvey(restaurant.id, this.connectedUser.uid);
    this.onSurveyClosed();
  }

  onSurveyClosed():void {
    this.restaurantsService.updateRestaurantSurveyStatus(false);
  }

  onFilterChanged(filter:FilterSuggestions):void {
    this.store.dispatch(CHANGE_FILTER({filter}));
  }*/
}
