import { QuestionBase } from './question-base';
import { SurveyType } from '../enums/enums';

export class TextBoxQuestion extends QuestionBase<string> {
  controlType = SurveyType.textBox;
  type:string;

  constructor(options:{} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
