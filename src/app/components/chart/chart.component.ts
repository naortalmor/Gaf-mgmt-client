import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { Restaurant } from '../../models/interfaces/restaurant';
import { User } from '../../models/interfaces/user';
import { chartData } from '../../models/interfaces/chart-data';

const CHART_HEIGHT:number = 700;
const CHART_WIDTH:number = 300;
const COLOR_SCHEME:string[] = ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnChanges {
  @Input() restaurantSurvey:RestaurantSurvey[];
  @Input() restaurants:Restaurant[];
  @Input() users:User;

  chartSizes:[number, number];
  chartResult:chartData[];
  colorScheme:chartColorSchema;

  constructor() {
    this.chartSizes = [CHART_HEIGHT, CHART_WIDTH];
    this.chartResult = [];
    this.colorScheme = {domain: COLOR_SCHEME};
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurantSurvey) {
      this.updateChartData();
    }
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

  private updateChartData():void {
    this.restaurantSurvey.forEach((survey:RestaurantSurvey) => {
      const restaurant:Restaurant = this.restaurants.find(restaurant => restaurant.id === survey.restaurantId);
      if (restaurant) {
        const chartData:chartData = {
          name: restaurant.name,
          value: survey.votersId.length
        };
        this.insertChartData(chartData);
      }
    });
  }

  private insertChartData(chartData:chartData):void {
    let restaurantResultIndex:number = this.chartResult.findIndex(result => result.name === chartData.name);
    if (restaurantResultIndex !== -1) {
      this.chartResult[restaurantResultIndex].value = chartData.value;
    } else {
      this.chartResult.push(chartData);
    }
  }
}

interface chartColorSchema {
  domain:string[];
}
