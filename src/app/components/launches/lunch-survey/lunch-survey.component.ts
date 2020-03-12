import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionBase } from '../../../models/question-model/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../../services/question-control.service';

@Component({
  selector: 'app-lunch-survey',
  templateUrl: './lunch-survey.component.html',
  styleUrls: ['./lunch-survey.component.css']
})
export class LunchSurveyComponent implements OnInit {
  @Input() questions:QuestionBase<any>[];
  @Output() close:EventEmitter<void>;
  form:FormGroup;
  payLoad = '';

  constructor(private qcs:QuestionControlService) {
    this.close = new EventEmitter<void>();
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.close.emit();
  }

  onClose():void {
    this.close.emit();
  }
}
