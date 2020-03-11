import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartData } from '../../models/interfaces/chart-data';
import { ChartType } from '../../models/enums/enums';

const COLOR_SCHEME:string[] = ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  @Input() chartType:ChartType;
  @Input() chartData:ChartData[];
  @Input() chartSizes:[number, number];
  @Output() chartValueSelectedEmitter:EventEmitter<any>;

  colorScheme:chartColorSchema;

  constructor() {
    this.colorScheme = {domain: COLOR_SCHEME};
    this.chartValueSelectedEmitter = new EventEmitter<any>();
  }

  get chartTypes() {
    return ChartType;
  }

  onSelect(event:any):void {
    this.chartValueSelectedEmitter.emit(event);
  }
}

interface chartColorSchema {
  domain:string[];
}
