import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MULTI, SINGLE } from './data';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { Restaurant } from '../../models/interfaces/restaurant';
import { User } from '../../models/interfaces/user';

const CHART_HEIGHT:number = 700;
const CHART_WIDTH:number = 300;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() restaurantSurvey:RestaurantSurvey[];
  @Input() restaurants:Restaurant[];
  @Input() users:User;

  view:[number, number];
  colorScheme:chartColorSchema;
  result:chartData[];
  gradient:boolean;
  legend:boolean;
  legendPosition:string;
  showLabels:boolean;
  isDoughnut:boolean;


  multi:any[];
  animations:boolean;
  xAxis:boolean;
  yAxis:boolean;
  showYAxisLabel:boolean;
  showXAxisLabel:boolean;
  xAxisLabel:string;
  yAxisLabel:string;
  timeline:boolean;

  constructor() {
    this.view = [CHART_HEIGHT, CHART_WIDTH];
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
    this.result = [];
    this.gradient = false;
    this.legend = true;
    this.legendPosition = 'below';
    this.showLabels = true;
    this.isDoughnut = false;


    this.multi = MULTI;
    this.animations = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showYAxisLabel = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Year';
    this.yAxisLabel = 'Population';
    this.timeline = true;
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurantSurvey) {
      this.updateChartData();
    }
  }

  ngOnInit():void {
    this.updateChartData();
  }

  private updateChartData():void {
    this.restaurantSurvey.forEach((survey:RestaurantSurvey) => {
      let restaurantName:string = this.restaurants.find(restaurant => restaurant.id === survey.restaurantId).name;
      if (restaurantName) {
        const chartData:chartData = {
          name: restaurantName,
          value: survey.votersId.length
        };
        if(this.result.find(result => result.name === chartData.name)) {
          this.result.map(result => {
            if(result.name === chartData.name) {
              result.value = chartData.value;
            }
          })
        } else {
          this.result.push(chartData);
        }
      }
    });
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

interface chartColorSchema {
  domain:string[];
}

export interface chartData {
  name:string;
  value:number;
}
