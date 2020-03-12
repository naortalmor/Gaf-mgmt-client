import { QuestionBase } from '../models/question-model/question-base';
import { DropdownQuestion } from '../models/question-model/dropdown-question';
import { TextBoxQuestion } from '../models/question-model/textbox-question';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuestionService {
  getLaunchSurveyQuestions() {
    let questions:QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'exist',
        label: 'באיזה מסעדה ברצונך לאכול',
        options: [
          {key: '0', value: 'בחר מסעדה'},
          {key: 'rest1', value: 'מסעדה 1'},
          {key: 'rest2', value: 'מסעדה 2'},
          {key: 'rest3', value: 'מסעדה 3'},
          {key: 'rest4', value: 'מסעדה 4'}
        ],
        order: 1
      }),

      new TextBoxQuestion({
        key: 'new',
        label: 'הכנס מסעדה חדשה',
        value: '',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
