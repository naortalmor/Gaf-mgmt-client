import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/interfaces/restaurant';

@Component({
  selector: 'app-suggestions-container',
  templateUrl: './suggestions-container.component.html',
  styleUrls: ['./suggestions-container.component.css']
})
export class SuggestionsContainerComponent {
  @Input() restaurants: Restaurant[];
}
