import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { QuestionBase } from '../../../models/question-model/question-base';
import { Restaurant } from '../../../models/interfaces/restaurant';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-lunch-survey',
  templateUrl: './lunch-survey.component.html',
  styleUrls: ['./lunch-survey.component.css']
})
export class LunchSurveyComponent implements OnChanges {
  @Input() restaurants:Restaurant[];
  @Output() submit:EventEmitter<Restaurant[]>;
  @Output() close:EventEmitter<void>;
  surveyQuestions:QuestionBase<string>[];

  constructor(private questionService:QuestionService) {
    this.submit = new EventEmitter<Restaurant[]>();
    this.close = new EventEmitter<void>();
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurants && this.restaurants) {
      this.updateForm();
    }
  }

  onSubmit(restaurantsIds:string[]) {
    let selectedRestaurants:Restaurant[] = this.restaurants.filter(rest => restaurantsIds.find(resId => resId === rest.id.toString()));
    this.submit.emit(selectedRestaurants);
  }

  onClose():void {
    this.close.emit();
  }

  private updateForm():void {
    this.surveyQuestions = this.questionService.getLaunchSurveyQuestions(this.restaurants);
  }
}
