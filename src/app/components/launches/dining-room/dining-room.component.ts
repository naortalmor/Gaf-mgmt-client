import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dining-room',
  templateUrl: './dining-room.component.html',
  styleUrls: ['./dining-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class diningRoomComponent {
  addingFood:boolean;

  constructor() {
    this.addingFood = false;
  }

  ToggleFoodButton():void {
    this.addingFood = !this.addingFood
  }
}
