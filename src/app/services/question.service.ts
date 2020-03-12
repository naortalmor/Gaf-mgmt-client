import { QuestionBase } from '../models/question-model/question-base';
import { DropdownQuestion } from '../models/question-model/dropdown-question';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/interfaces/restaurant';

@Injectable({providedIn: 'root'})
export class QuestionService {
  getLaunchSurveyQuestions(restaurants:Restaurant[]) {
    let options:any[] = [];
    restaurants.forEach(rest => {
      let option = {
        key: rest.id,
        value: rest.name
      };
      options.push(option);
    });
    let questions:QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'restaurant',
        label: 'באיזה מסעדה ברצונך לאכול',
        options: options,
        required: true,
        order: 1
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
