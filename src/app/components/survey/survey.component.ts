import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionBase } from '../../models/question-model/question-base';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent {
  @Input() question:QuestionBase<string>;
  @Output() save:EventEmitter<string[]>;
  @Output() close:EventEmitter<void>;

  toppings = new FormControl();

  constructor() {
    this.save = new EventEmitter<string[]>();
    this.close = new EventEmitter<void>();
  }

  onClose():void {
    this.close.emit();
  }

  onSave():void {
    let selected:string[] = [];
    if (this.toppings.value && this.toppings.value.length) {
      this.toppings.value.forEach(select => {
        this.question.options.forEach(rest => {
          if (rest.value === select) {
            selected.push(rest.key);
          }
        });
      });
    }

    this.save.emit(selected);
  }
}
