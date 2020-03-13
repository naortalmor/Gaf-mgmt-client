import { Component, Input } from '@angular/core';
import { Bubble } from '../../../models/interfaces/bubble';

@Component({
  selector: 'app-mifgaf-info',
  templateUrl: './mifgaf-info.component.html',
  styleUrls: ['./mifgaf-info.component.css']
})
export class MifgafInfoComponent {
  @Input() bubble:Bubble;

  constructor() {
  }
}
