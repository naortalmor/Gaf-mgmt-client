import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from 'src/app/models/interfaces/person';
import {User} from '../../../models/user';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThisWeekComponent {
  @Input() currentWeekPersons: User[];
  @Input() style: string;

  constructor() {
  }
}
