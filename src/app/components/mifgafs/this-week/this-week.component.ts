import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person';

const MANAGE_NEXT_MIFGAF_TEXT:string ='אחראיים על המפגף הקרוב';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThisWeekComponent {
  @Input() currentWeekPersons:Person[];
  manageNextMifgafText:string;

  constructor() {
    this.manageNextMifgafText = MANAGE_NEXT_MIFGAF_TEXT;
  }
}
