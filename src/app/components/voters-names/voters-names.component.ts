import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voters-names',
  templateUrl: './voters-names.component.html',
  styleUrls: ['./voters-names.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotersNamesComponent {
  @Input() header:string;
  @Input() voters:string[];
  @Output() closeEmitter:EventEmitter<void>;

  constructor() {
    this.closeEmitter = new EventEmitter<void>();
  }

  close():void {
    this.closeEmitter.emit();
  }
}



