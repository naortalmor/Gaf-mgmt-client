import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MULTI } from './data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  multi:any[];
  view:number[];
  legend:boolean;
  showLabels:boolean;
  animations:boolean;
  xAxis:boolean;
  yAxis:boolean;
  showYAxisLabel:boolean;
  showXAxisLabel:boolean;
  xAxisLabel:string;
  yAxisLabel:string;
  timeline:boolean;
  colorScheme:{ domain:string[] };

  constructor() {
    this.multi = MULTI;
    this.view = [700, 300];
    this.legend = true;
    this.showLabels = true;
    this.animations = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showYAxisLabel = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Year';
    this.yAxisLabel = 'Population';
    this.timeline = true;
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(data):void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data):void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));

  }
}
