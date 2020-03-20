import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../../../models/interfaces/restaurant';
import { RestaurantSurvey } from '../../../models/interfaces/restaurant-survey';
import { User } from '../../../models/user';

@Component({
  selector: 'app-others-suggestions',
  templateUrl: './others-suggestions.component.html',
  styleUrls: ['./others-suggestions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OthersSuggestionsComponent {
  @Input() surveyOpened:boolean;
  @Input() restaurants:Restaurant[];
  @Input() restaurantSurvey:RestaurantSurvey;
  @Input() users:User[];
  @Output() surveyOpenedEmitter:EventEmitter<void>;
  @Output() surveySubmittedEmitter:EventEmitter<Restaurant[]>;

  mySurveyOpened:boolean;

  constructor() {
    this.surveyOpenedEmitter = new EventEmitter<void>();
    this.surveySubmittedEmitter = new EventEmitter<Restaurant[]>();
    this.mySurveyOpened = false;
  }

  onOpenSurvey():void {
    this.surveyOpenedEmitter.emit();
    this.mySurveyOpened = true;
  }

  onSurveySubmitted(restaurants:Restaurant[]) {
    this.mySurveyOpened = false;
    this.surveySubmittedEmitter.emit(restaurants);
  }

  onSurveyClosed():void {
    this.mySurveyOpened = false;
  }

  showSurvey():void {
    this.mySurveyOpened = true;
  }
}
