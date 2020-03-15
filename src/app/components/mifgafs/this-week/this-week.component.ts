import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from 'src/app/models/interfaces/person';
import {User} from '../../../models/user';

const MANAGE_NEXT_MIFGAF_TEXT: string = 'אחראיים על המפגף הקרוב';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThisWeekComponent {
  @Input() currentWeekPersons: User[];
  @Output() winners: EventEmitter<User[]>;
  manageNextMifgafText: string;

  constructor() {
    this.manageNextMifgafText = MANAGE_NEXT_MIFGAF_TEXT;
    this.winners = new EventEmitter<User[]>();
  }

  mifgafExist() {
    this.winners.emit(this.currentWeekPersons);
  }
}
