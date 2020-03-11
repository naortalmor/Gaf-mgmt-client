import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standart-button',
  templateUrl: './standart-button.component.html',
  styleUrls: ['./standart-button.component.css']
})
export class StandartButtonComponent implements OnInit {
  @Input() title: string;
  @Input() color?: string;
  @Input() icon?: string;
  @Input() size?: string;
  @Input() onHover?: string;
  @Output() onclick: EventEmitter<void>;


  constructor() { }

  ngOnInit() {
  }

}
