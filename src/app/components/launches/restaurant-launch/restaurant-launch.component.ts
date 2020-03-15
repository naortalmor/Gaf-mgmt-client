import { Restaurant } from '../../../models/interfaces/restaurant';
import { FilterSuggestions } from '../../../models/interfaces/suggestion-filter';
import { CHANGE_FILTER } from '../../../store/suggestions-filter/suggestions-filter.actions';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RestaurantLaunchTabs } from '../../../models/enums/enums';
import { User } from '../../../models/user';

@Component({
  selector: 'app-restaurant-launch',
  templateUrl: './restaurant-launch.component.html',
  styleUrls: ['./restaurant-launch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantLaunchComponent {
  @Input() connectedUser:User;

  selectedTab:string;
  tabs = RestaurantLaunchTabs;

  constructor() {
    this.tabs = RestaurantLaunchTabs;
    this.selectedTab = RestaurantLaunchTabs.OTHER;

  }


  changeTab(newTab:string):void {
     this.selectedTab = newTab;
   }
  /*
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
