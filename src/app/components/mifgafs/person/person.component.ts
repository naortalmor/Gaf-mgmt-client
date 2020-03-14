import {Component, Input} from '@angular/core';
import {Person} from 'src/app/models/interfaces/person';
import {User} from '../../../models/user';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: User;

  constructor() {

  }

}
