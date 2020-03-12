import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-model/question-base';
import { SurveyType } from '../../models/enums/enums';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent {
  @Input() question:QuestionBase<string>;
  @Input() form:FormGroup;

  get surveyTypes() {
    return SurveyType;
  }
}
