import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() header: string;
  @Input() isSelected: string;
  @Output() selectTabEmitter: EventEmitter<void>;

  constructor() {
    this.selectTabEmitter = new EventEmitter<void>();
  }

  tabClicked() {
    if (!this.isSelected) {
      this.selectTabEmitter.emit();
    }
  }
}
