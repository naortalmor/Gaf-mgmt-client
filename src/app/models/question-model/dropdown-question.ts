import { QuestionBase } from './question-base';
import { SurveyType } from '../enums/enums';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = SurveyType.dropdown;
  options:{ key:string, value:string }[] = [];

  constructor(options:{} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
