import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { QuestionBase } from '../../../models/question-model/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../../services/question-control.service';
import { Restaurant } from '../../../models/interfaces/restaurant';
import { QuestionService } from '../../../services/question.service';

const NO_SELECTED_RESTAURANT:string = '0';

@Component({
  selector: 'app-lunch-survey',
  templateUrl: './lunch-survey.component.html',
  styleUrls: ['./lunch-survey.component.css']
})
export class LunchSurveyComponent implements OnChanges {
  @Input() restaurants:Restaurant[];
  @Output() close:EventEmitter<void>;
  @Output() submit:EventEmitter<Restaurant>;
  surveyQuestions:QuestionBase<string>[];

  form:FormGroup;
  payLoad:RestaurantSurveyPayload = {restaurant: NO_SELECTED_RESTAURANT};

  constructor(private qcs:QuestionControlService,
              private questionService:QuestionService) {
    this.close = new EventEmitter<void>();
    this.submit = new EventEmitter<Restaurant>();
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurants && this.restaurants) {
      this.updateForm();
    }
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    if (this.payLoad && this.payLoad.restaurant.length && this.payLoad.restaurant !== NO_SELECTED_RESTAURANT) {
      let selectedRestaurant:Restaurant = this.restaurants.find(rest => rest.id.toString() === this.payLoad.restaurant);
      this.submit.emit(selectedRestaurant);
    }
  }

  onClose():void {
    this.close.emit();
  }

  private updateForm():void {
    this.surveyQuestions = this.questionService.getLaunchSurveyQuestions(this.restaurants);
    this.form = this.qcs.toFormGroup(this.surveyQuestions);
  }
}

interface RestaurantSurveyPayload {
  restaurant:string;
}
