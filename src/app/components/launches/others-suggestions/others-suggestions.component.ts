import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Restaurant } from '../../../models/interfaces/restaurant';
import { RestaurantSurvey } from '../../../models/interfaces/restaurant-survey';
import { User } from '../../../models/user';

@Component({
  selector: 'app-others-suggestions',
  templateUrl: './others-suggestions.component.html',
  styleUrls: ['./others-suggestions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OthersSuggestionsComponent implements OnChanges {
  @Input() surveyOpened:boolean;
  @Input() restaurants:Restaurant[];
  @Input() restaurantSurvey:RestaurantSurvey[];
  @Input() users:User[];
  @Output() surveyOpenedEmitter:EventEmitter<void>;
  @Output() surveySubmittedEmitter:EventEmitter<Restaurant[]>;
  @Output() surveyClosedEmitter:EventEmitter<void>;

  constructor() {
    this.surveyOpenedEmitter = new EventEmitter<void>();
    this.surveySubmittedEmitter = new EventEmitter<Restaurant[]>();
    this.surveyClosedEmitter = new EventEmitter<void>();
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(changes);
  }

  onOpenSurvey():void {
    this.surveyOpenedEmitter.emit();
  }

  onSurveySubmitted(restaurants:Restaurant[]) {
    this.surveySubmittedEmitter.emit(restaurants);
  }

  onSurveyClosed():void {
    this.surveyClosedEmitter.emit();
  }
}
