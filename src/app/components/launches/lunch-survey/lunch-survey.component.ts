import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionBase } from '../../../models/question-model/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../../services/question-control.service';

const NO_SELECTED_RESTAURANT:string = '0';

@Component({
  selector: 'app-lunch-survey',
  templateUrl: './lunch-survey.component.html',
  styleUrls: ['./lunch-survey.component.css']
})
export class LunchSurveyComponent implements OnInit {
  @Input() questions:QuestionBase<any>[];
  @Output() close:EventEmitter<void>;
  @Output() submit:EventEmitter<string>;
  form:FormGroup;
  payLoad:RestaurantSurveyPayload = {exist: NO_SELECTED_RESTAURANT, new: ''};

  constructor(private qcs:QuestionControlService) {
    this.close = new EventEmitter<void>();
    this.submit = new EventEmitter<string>();
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    if (this.payLoad) {
      if (this.payLoad.exist.length && this.payLoad.exist !== NO_SELECTED_RESTAURANT) {
        this.submit.emit(this.payLoad.exist);
      } else if (this.payLoad.new.length) {
        this.submit.emit(this.payLoad.new);
      }
    }
  }

  onClose():void {
    this.close.emit();
  }
}

interface RestaurantSurveyPayload {
  exist:string;
  new:string;
}
