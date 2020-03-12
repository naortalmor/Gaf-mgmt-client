import { QuestionBase } from '../models/question-model/question-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class QuestionControlService {
  constructor() {
  }

  toFormGroup(questions:QuestionBase<string>[]) {
    let group:any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
